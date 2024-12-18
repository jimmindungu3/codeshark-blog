import React, { useState } from "react";

const SideBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 pb-4 px-4 rounded-md">
      <div className="text-blue-500 dark:text-yellow-500 font-bold text-2xl pt-6">
        Blog Posts
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Choosing Your First Programming Language</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Exploring Popular JavaScript Frameworks</a>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <a href="#">Understanding Asynchronous Programming in JavaScript</a>
      </div>
    </div>
  );
};

export default SideBar;
