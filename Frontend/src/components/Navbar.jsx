import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ toggleMobileMenu }) => {
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
      <div className="bg-white dark:bg-gray-800 shadow-md mb-6 px-4 rounded-b-sm md:mx-2">
        <div className="mx-auto max-w-7xl">
          <div className="py-4 flex justify-between">
            <Link
              to="/"
              className="text-gray-700 dark:text-white text-2xl font-bold hover:cursor-pointer"
            >
              CodeShark🦈
            </Link>
            <div className="space-x-2 text-2xl items-center">
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300"
              >
                {isDarkMode ? <MdSunny /> : <LuSunMoon />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-gray-300 md:hidden"
              >
                <IoMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
