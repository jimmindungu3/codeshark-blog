import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ toggleMobileMenu }) => {
  // Initialize theme state based on localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // If no saved theme, check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme changes and save to localStorage
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

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
            <div className="space-x-2 text-2xl items-center flex">
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <MdSunny /> : <LuSunMoon />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 dark:text-gray-300 md:hidden hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
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