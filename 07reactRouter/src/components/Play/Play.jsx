import { useState, useEffect } from "react";
import ct from '../../assets/cg.png'
import Button from '../../button/Button'
export default function Play() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAnimeImage = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.nekosia.cat/api/v1/images/catgirl");
      const data = await response.json();

      // Append new image to existing array
      setImages((prevImages) => [...prevImages, data.image.compressed.url]);
    } catch (error) {
      console.error("Error fetching anime images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimeImage(); // Fetch one image on initial load
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 flex flex-col items-center">
<h1 className="flex items-center justify-center text-4xl font-extrabold text-pink-400 mb-6 tracking-wide text-center drop-shadow-lg">
  <img className="w-10 h-16 mr-2" src={ct} alt="catgirl" />
  Cute Catgirls!
  {/* <img className="w-16 h-16 ml-2" src={ct} alt="catgirl" /> */}
</h1>
        
      
{/* // Button code */}
  

      
<button
  onClick={fetchAnimeImage}
  className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200 ease-in-out mb-6"
>
  {loading ? "Loading... ⏳" : "Load More"}
</button>



      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols- 10 gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt="Anime Catgirl"
                className="w-full h-100 object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">✨ Kawaii! ✨</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg">No images found. Try loading again! 🖼️</p>
        )}
      </div>
    </div>
  );
}

