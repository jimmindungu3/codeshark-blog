import React from "react";
import SideBar from "./SideBar";
import BlogContent from "./BlogContent";

const Body = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 h-[calc(100vh-6rem)]">
      <div className="col-span-3 overflow-y-auto">
        <div className="h-full">
          <SideBar />
        </div>
      </div>

      <div className="col-span-9 overflow-y-auto">
        <div className="h-full">
          <BlogContent />
        </div>
      </div>
    </div>
  );
};

export default Body;