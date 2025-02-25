import React, { useState, useEffect } from "react";

// List of available categories from the API
const categories = [
  "angry", "baka", "bite", "blush", "bonk", "bored", "bully", "bye", "chase",
  "cheer", "cringe", "cry", "cuddle", "dab", "dance", "die", "disgust", "facepalm",
  "feed", "glomp", "happy", "hi", "highfive", "hold", "hug", "kick", "kill", "kiss",
  "laugh", "lick", "love", "lurk", "midfing", "nervous", "nom", "nope", "nuzzle",
  "panic", "pat", "peck", "poke", "pout", "punch", "run", "sad", "shoot", "shrug",
  "sip", "slap", "sleepy", "smile", "smug", "stab", "stare", "suicide", "tease", "think",
  "thumbsup", "tickle", "triggered", "wag", "wave", "wink", "yes"
];

const AnimeGifPage = () => {
  const [gifUrls, setGifUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch random GIFs from a random category
  const fetchRandomGifs = async (count = 10) => {
    setLoading(true);
    setError(null);
    let gifs = [...gifUrls]; // Store previous gifs to append new ones

    for (let i = 0; i < count; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const url = `https://waifu.it/api/v4/${randomCategory}`; // Random category endpoint

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "MTI2MjM3MzIzMTk1MjY1ODUxNA--.MTczODQyNDAwMA--.ad66f75a0", // Replace with your actual API token
          },
        });

        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure the response contains a valid GIF URL
        if (data.url) {
          if (!gifs.includes(data.url)) {
            gifs.push(data.url); // Only add unique GIF URLs
          }
        } else {
          console.error("No GIF found in response.");
        }
      } catch (error) {
        // Handle both network and HTTP errors
        console.error("Error fetching GIF:", error);
        setError(`Error fetching GIFs: ${error.message}`);
      }
    }

    setGifUrls(gifs); // Update the GIF URLs state with the new list
    setLoading(false); // Stop loading state
  };

  // Load more GIFs when button is clicked
  const loadMoreGifs = () => {
    fetchRandomGifs(10); // Load more 10 GIFs
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchRandomGifs(10); // Fetch the first 10 GIFs when the page loads
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center py-12 text-gray-100">Videos</h1>

      {/* Display loading or error messages */}
      {loading && (
        <div className="text-sm">Loading ...</div>
      )}
      {error && (
        <div className="text-xl text-red-500">{error}</div>
      )}

      {/* Display GIFs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gifUrls.length > 0 ? (
          gifUrls.map((url, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-center items-center">
              <img
                src={url}
                alt={`Random Anime GIF ${index}`}
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          ))
        ) : (
          <div className="text-white">No GIFs to display.</div>
        )}
      </div>

      {/* Load More Button */}
      {!loading && !error && gifUrls.length > 0 && (
        <div className="py-6">
          <button
            onClick={loadMoreGifs}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More GIFs
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimeGifPage;
