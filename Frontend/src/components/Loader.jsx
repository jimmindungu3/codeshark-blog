import React from 'react';

const Loader = () => {
  return (
    <div className="my-28 flex items-center justify-center space-x-2">
      <div className="w-6 h-6 border-4 border-dashed border-yellow-500 rounded-full animate-spin"></div>
      <span className="text-xl font-bold text-yellow-500">Loading Blog</span>
    </div>
  );
};

export default Loader;