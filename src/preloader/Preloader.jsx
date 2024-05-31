import React from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900">
      </div>
    </div>
  );
};

export default Preloader;
