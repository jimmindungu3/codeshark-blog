import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow-md mb-8 px-4 rounded-md">
        <div className="mx-auto max-w-7xl">
          <div className="py-4 flex justify-between">
            {/* <div className="text-blue-500 dark:text-yellow-500 text-2xl font-bold hover:cursor-pointer">
              CodeShark🦈
            </div> */}
            <Link
              to="/"
              className="text-blue-500 dark:text-yellow-500 text-2xl font-bold hover:cursor-pointer"
            >
              CodeShark🦈
            </Link>
            <button onClick={toggleTheme} className="text-yellow-500 text-2xl">
              {isDarkMode ? <MdSunny /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
