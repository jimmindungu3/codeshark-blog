import React, { lazy, useState, Suspense } from "react";
import Loader from "./Loader";

const BlogContent = () => {
  const blogs = {
    blog1: lazy(() => import("./FirstProgrammingLanguage")),
    blog2: lazy(() => import("./JSFrameworks")),
    blog3: lazy(() => import("./AsycProgramming")),
  };

  const [CurrentBlog, setCurrentBlog] = useState(blogs.blog1);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-l-md">
      <Suspense fallback={<Loader />}>
        <CurrentBlog />
      </Suspense>
    </div>
  );
};

export default BlogContent;
