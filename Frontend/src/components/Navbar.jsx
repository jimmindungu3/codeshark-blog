import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Retrieve theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme and persist to localStorage
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

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white dark:bg-gray-950 bg-opacity-90 shadow-md mb-8 px-4 rounded-md">
        <div className="mx-auto max-w-7xl">
          <div className="py-4 flex justify-between">
            <div className="text-blue-500 dark:text-yellow-500 text-2xl font-bold hover:cursor-pointer">
              CodeShark🦈
            </div>
            <div className="space-x-4">
              <button
                onClick={toggleTheme}
                className="text-yellow-500 text-2xl"
              >
                {isDarkMode ? <MdSunny /> : <FaMoon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
