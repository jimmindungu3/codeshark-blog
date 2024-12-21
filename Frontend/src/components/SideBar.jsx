// components/SideBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  return (
    <div className="bg-white dark:bg-gray-800 pb-4 px-4 rounded-md">
      <div className="text-blue-500 dark:text-yellow-500 font-bold text-2xl pt-6">
        Blog Posts
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <Link
          to="/blog/first-programming-language"
          onClick={() => setIsSidebarOpen(false)}
          className={currentPath === 'first-programming-language' ? 'underline' : ''}
        >
          Choosing Your First Programming Language
        </Link>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <Link
          to="/blog/js-frameworks"
          onClick={() => setIsSidebarOpen(false)}
          className={currentPath === 'js-frameworks' ? 'underline' : ''}
        >
          Exploring Popular JavaScript Frameworks
        </Link>
      </div>
      <div className="text-blue-500 hover:underline dark:text-gray-300 font-semibold mt-6">
        <Link
          to="/blog/async-programming"
          onClick={() => setIsSidebarOpen(false)}
          className={currentPath === 'async-programming' ? 'underline' : ''}
        >
          Asynchronous Programming in JavaScript
        </Link>
      </div>
    </div>
  );
};

export default SideBar;