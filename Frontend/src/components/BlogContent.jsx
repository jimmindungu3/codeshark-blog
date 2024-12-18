import React, { useState, Suspense } from "react";
import Loader from "./Loader";

const BlogContent = ({ currentBlog }) => {
  const CurrentBlog = currentBlog
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-l-md">
      <Suspense fallback={<Loader />}>
        <CurrentBlog />
      </Suspense>
    </div>
  );
};

export default BlogContent;
