import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Subscribe() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6">
        <div className="w-full max-w-md bg-[#222] text-white rounded-2xl shadow-2xl p-8 relative border-2 border-purple-500">
          
          {/* Neon Glow Effect */}
          <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl"></div>
  
          <h1 className="text-4xl font-extrabold text-center text-pink-400 mb-4 tracking-wide drop-shadow-lg">
            🌸 Join the Anime Universe!
          </h1>
          <p className="text-center text-gray-300 mb-6">
            Get exclusive anime updates, recommendations, and news delivered to you!
          </p>
  
          <form className="space-y-5 relative z-10">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-pink-400 rounded-lg bg-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-purple-400 rounded-lg bg-[#333] text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg"
            >
              Subscribe Now 🚀
            </button>
          </form>
  
          <div className="mt-6 text-center text-sm text-gray-400">
            By subscribing, you agree to our{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Terms & Privacy Policy.
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  
