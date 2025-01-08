import React from "react";
import { Link } from "react-router-dom";

const HeaderWithNavbar = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Video Section */}
      <div className="flex justify-center items-center relative">
        <video
          className="w-full h-64 object-cover rounded-lg shadow-lg z-0"
          autoPlay
          muted
          loop
        >
          <source src="/headervideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Search Bar */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
             <h1 className="text-3xl font-bold m-4 hover:text-indigo-400">See the World Through Our Lens</h1>
          <input
            
            className="rounded-full px-6 py-3 m-2 bg-white text-black w-64 sm:w-96"
            type="text"
            placeholder="Search Image Here.."
          />
          <button className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Search
          </button>
       
          
          

        </div>
        
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-opacity-50 text-white z-10">
        <h1 className="text-2xl font-bold">Micasoo..</h1>
        

        <div className="flex gap-4">
          <Link to="/login">
          <button className="hover:underline cursor-pointer">Login</button>
          </Link>
          <button className="hover:underline cursor-pointer">Join</button>
          
        </div>
        
        
      </nav>
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Left Section */}
      <div className="text-lg font-semibold text-black">
        Free Stock Photos
      </div>

      {/* Center Links */}
      <ul className="flex space-x-8 text-gray-600 font-medium">
        <li>
          <a
            href="#"
            className="px-3 py-2 rounded-md hover:text-black hover:bg-gray-200 focus:bg-black focus:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Videos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Leaderboard
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Challenges
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="relative">
        <button className=" text-black flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
          Trending
          <span className="ml-2">&#9660;</span>
        </button>
      </div>
    </nav>
      <div className="w-full bg-white py-10 px-4">
      <h2 className="text-3xl  text-black font-bold text-center mb-8">Join With Us And Start Your Journey Today</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md text-black">
      <img src="data:image/png;base64,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" alt="Create" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">Create</h3>
      <p className="text-gray-600">
        Produce high-quality images and videos for our customers to download.
      </p>
    </div>
    {/* Card 2 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md text-black">
      <img src="data:image/png;base64,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" alt="Submit" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">Submit</h3>
      <p className="text-gray-600">
        Upload your content with our easy-to-use platform, and get tips for success.
      </p>
    </div>
    {/* Card 3 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md text-black">
      <img src="data:image/png;base64,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" alt="Get Paid" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">Get Paid</h3>
      <p className="text-gray-600">
        Make money every time your content is downloaded by one of our worldwide customers.
      </p>
    </div>
    {/* Card 4 */}
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md text-black">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTMhbihb9owgFENAae6eKnF0815dU-NDeOQ&s" alt="Refer" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">Refer</h3>
      <p className="text-gray-600">
        Earn even more by referring new contributors and customers.
      </p>
    </div>
  </div>
</div>
<div className="bg-white rounded-lg shadow-lg overflow-hidden relative w-80">
      {/* Card Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="Sample"
        className="w-full h-48 object-cover"
      />

      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          title="Save"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          💾
        </button>
        <button
          title="Like"
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ❤️
        </button>
      </div>

      {/* Card Details */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <img
            src="https://images.pexels.com/photos/27875083/pexels-photo-27875083/free-photo-of-a-woman-with-long-hair-and-a-brown-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          {/* Profile Name */}
          <span className="font-bold text-lg text-black">Ravinder Ravi</span>
        </div>

        {/* Download Button */}
        <div className="mt-4 flex justify-center">
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700">
            <span className="mr-2">⬇️</span> Download
          </button>
        </div>
      </div>
    </div> 

    </div>
    
    
  );
};

export default HeaderWithNavbar;
