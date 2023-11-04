import React from "react";

const GalleryTopSection = () => {
  return (
    <div className="flex justify-between px-10 items-center">
      <div>
        <input
          className="bg-blue-500 mr-3"
          type="checkbox"
          name="selectedFiles"
          id=""
        />
        <span className="text-black">3 Files Selected</span>
      </div>

      <button className="text-red-600 py-5">Delete Files</button>
    </div>
  );
};

export default GalleryTopSection;
