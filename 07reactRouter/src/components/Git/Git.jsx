import React, { useState, useEffect } from 'react';

function Git() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      let allImages = []; // To store all the images

      // Fetch 100 images in each request, 10 requests to get 1000 images
      for (let i = 0; i < 10; i++) {
        try {
          const response = await fetch(`https://thingproxy.freeboard.io/fetch/https://api.nekosapi.com/v4/images/random?limit=100`);
          const data = await response.json();
          
          // Append the fetched images to the allImages array
          const imageUrls = data.map(item => item.url);
          allImages = [...allImages, ...imageUrls];
          
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }

      // Set the images state to all images fetched
      setImages(allImages);
    };

    fetchImages(); // Trigger the fetch operation
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 gap-6'>
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg border-4 border-black/5">
          <img
            src={image}
            alt="Random Image"
            className="border-black/200 w-full h-120 object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">✨ Kawaii! ✨</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Git;
