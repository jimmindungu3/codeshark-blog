import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ closeSidebar }) => {
  return (
    <div className="dark:bg-gray-800 p-4">
      <h3 className="text-xl md:text-3xl font-bold mb-2 text-gray-700 dark:text-white">
        Blogs
      </h3>
      <ul className="text-gray-600 dark:text-gray-300 font-semibold space-y-4">
        <li className="hover:underline">
          <Link to="/javascript-tree" onClick={closeSidebar}>
            Javascript Tree
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/introduction-to-web-development" onClick={closeSidebar}>
            Introduction To web Development
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            to="/choosing-your-first-programming-language"
            onClick={closeSidebar}
          >
            Choosing Your First Programming Language
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            to="/asynchronous-programming-in-javascript"
            onClick={closeSidebar}
          >
            Asynchronous Programming In Javascript
          </Link>
        </li>

        <li className="hover:underline">
          <Link to="/javascript-frameworks" onClick={closeSidebar}>
            Javascript Frameworks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
