import React from "react";

const GalleryTopSection = ({ imgDivs, setImgDivs }) => {
  const selectedFiles = imgDivs.filter((img) => img.checked === true);

  //handle Delete function
  const handleDelete = () => {
    const restFiles = imgDivs.filter((img) => img.checked !== true);
    setImgDivs(restFiles);
  };
  return (
    <div className="flex justify-between px-10 items-center">
      <div>
        <input
          className="bg-blue-500 mr-3"
          type="checkbox"
          name="selectedFiles"
          id=""
        />
        <span className="text-black">
          {selectedFiles.length} Files Selected
        </span>
      </div>

      <button onClick={handleDelete} className="text-red-600 py-5">
        Delete Files
      </button>
    </div>
  );
};

export default GalleryTopSection;
