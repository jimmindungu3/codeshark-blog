import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ closeSidebar }) => {
  return (
    <div className="dark:bg-gray-800 p-4">
      <h3 className="text-xl md:text-3xl font-bold mb-2 text-blue-500 dark:text-yellow-500">
        Blogs
      </h3>
      <ul className="text-gray-600 dark:text-gray-400 py-2 font-semibold space-y-2">
        <li className="hover:underline">
          <Link to="/AsyncProgramming" onClick={closeSidebar}>
            Asynchronous Programming In Javascript
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/FirstProgrammingLanguage" onClick={closeSidebar}>
            Choosing Your First Programming Language
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/JSFrameworks" onClick={closeSidebar}>
            Javascript Frameworks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
