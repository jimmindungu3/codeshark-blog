import React, { Suspense } from "react";
import Loader from "./Loader";

const BlogContent = ({ Blog }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Blog />
    </Suspense>
  );
};

export default BlogContent;
