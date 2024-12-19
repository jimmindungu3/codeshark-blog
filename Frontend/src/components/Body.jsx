import React, { lazy, useState } from "react";
import SideBar from "./SideBar";
import BlogContent from "./BlogContent";
import { RiMenuUnfold3Fill, RiMenuFold3Fill } from "react-icons/ri";

const blogs = {
  blog1: lazy(() => import("./FirstProgrammingLanguage")),
  blog2: lazy(() => import("./JSFrameworks")),
  blog3: lazy(() => import("./AsycProgramming")),
};

const Body = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(blogs.blog1);

  const selectBlog = (selectedBlog) => {
    setCurrentBlog(blogs[`blog${selectedBlog}`]);
    setIsSidebarOpen(false); // Close sidebar after selection
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed z-50 top-16 left-0 bg-gray-100 p-2 rounded-md shadow-md"
      >
        {isSidebarOpen ? <RiMenuFold3Fill /> : <RiMenuUnfold3Fill />}
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 h-[calc(100vh-6rem)]">
        {/* Sidebar - Mobile Sliding Menu */}
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
            <SideBar selectBlog={selectBlog} setIsSidebarOpen={setIsSidebarOpen}/>
          </div>
        </div>

        {/* Blog Content */}
        <div className="col-span-12 md:col-span-9 overflow-y-auto">
          <div className="h-full">
            <BlogContent currentBlog={currentBlog} />
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
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
