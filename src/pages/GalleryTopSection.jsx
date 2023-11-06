import React from "react";

const GalleryTopSection = ({ imgDivs, setImgDivs }) => {
  //filter selected files
  const selectedFiles = imgDivs.filter((img) => img.checked === true);

  //handle Delete function
  const handleDelete = () => {
    const restFiles = imgDivs.filter((img) => img.checked !== true);
    setImgDivs(restFiles);
  };

  return (
    <div className="flex justify-between px-10 items-center py-5">
      <div>
        {/* selected section */}
        {selectedFiles.length ? (
          <>
            <input
              className="bg-blue-500 mr-3"
              type="checkbox"
              checked={selectedFiles.length}
              name="selectedFiles"
              id=""
            />
            <span className="text-lg text-black">
              {selectedFiles.length} Files Selected
            </span>
          </>
        ) : (
          <span className="text-lg font-bold text-black ">Gallery</span>
        )}
      </div>

      {/* delete button */}
      {selectedFiles.length ? (
        <button onClick={handleDelete} className="font-medium text-red-600">
          Delete Files
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GalleryTopSection;
