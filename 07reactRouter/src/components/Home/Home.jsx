import React from 'react'
import { Link } from 'react-router-dom';
import myImage from '../../assets/img1.png'
import myImage1 from '../../assets/img2.png'
import of from '../../assets/of.png'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                   <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl sm:mt-1 mt-40 space-y-8 text-center sm:text-left sm:ml-auto">
        <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-gray-800 tracking-tight">
            Hello, I am Kazuka
            <span className="hidden sm:block text-4xl text-gray-600 mt-2">Let's have fun</span>
        </h2>

        <Link
            className="inline-flex text-white items-center px-8 py-2 bg-gray-900 font-medium rounded-b-2xl hover:bg-orange-500 transform hover:scale-105 transition-all ease-in-out"
            to="/"
        >
            <div className="flex flex-col items-center">
                <img src={of} className="w-24 h-8 object-contain mb-2" alt="Icon" />
                <span className="text-lg font-semibold">Connect with Me!</span>
            </div>
        </Link>
    </div>
</div>

                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={myImage} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-full w-48" src="https://m.media-amazon.com/images/I/71Yw2IoztcL.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Let's have fun</h1>
        </div>
    );
}

