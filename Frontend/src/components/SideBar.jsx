import React, { useState } from "react";

const SideBar = () => {

  return (
    <div className="bg-white dark:bg-gray-800 pb-4 px-4 rounded-md">
      <div className="text-blue-500 dark:text-yellow-500 font-bold text-2xl pt-6">
        Blog Posts
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">The Big Choice: First Programming Language</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Top 5 JavaScript Frameworks in 2025</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Understanding Asynchronous Programming</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Tailwind CSS vs. Bootstrap: Which to Choose?</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">React vs. Vue: The Developer's Perspective</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">How to Build a RESTful API with Node.js</a>
      </div>
    </div>
  );
};

export default SideBar;
