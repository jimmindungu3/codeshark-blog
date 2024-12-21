// components/Body.js
import React, { lazy, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import SideBar from "./SideBar";
import BlogContent from "./BlogContent";
import { RiMenuUnfold3Fill, RiMenuFold3Fill } from "react-icons/ri";

const blogs = {
  "first-programming-language": {
    component: lazy(() => import("./FirstProgrammingLanguage")),
    title: "Choosing Your First Programming Language"
  },
  "js-frameworks": {
    component: lazy(() => import("./JSFrameworks")),
    title: "Exploring Popular JavaScript Frameworks"
  },
  "async-programming": {
    component: lazy(() => import("./AsycProgramming")),
    title: "Asynchronous Programming in JavaScript"
  }
};

const Body = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Update document title based on current route
  React.useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    const currentBlog = blogs[currentPath];
    if (currentBlog) {
      document.title = `${currentBlog.title} | Your Blog Name`;
    }
  }, [location]);

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed z-50 top-16 left-0 bg-gray-100 p-2 rounded-md shadow-md"
      >
        {isSidebarOpen ? <RiMenuFold3Fill /> : <RiMenuUnfold3Fill />}
      </button>
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 h-[calc(100vh-6rem)]">
        <div
          className={`
            fixed md:static
            top-24 left-0 bottom-0
            md:col-span-3
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
            w-64 md:w-auto
            z-40
            md:bg-transparent
            shadow-lg md:shadow-none
            overflow-y-auto
          `}
        >
          <div className="h-full">
            <SideBar setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 overflow-y-auto">
          <div className="h-full">
            <Routes>
              <Route path="first-programming-language" element={<BlogContent Blog={blogs["first-programming-language"].component} />} />
              <Route path="js-frameworks" element={<BlogContent Blog={blogs["js-frameworks"].component} />} />
              <Route path="async-programming" element={<BlogContent Blog={blogs["async-programming"].component} />} />
              <Route path="*" element={<Navigate to="first-programming-language" replace />} />
            </Routes>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </div>
  );
};

export default Body;