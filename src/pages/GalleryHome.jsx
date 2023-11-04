import React from "react";
import Gallery from "./Gallery";
import GalleryTopSection from "./GalleryTopSection";

const GalleryHome = () => {
  return (
    <div className="bg-white shadow-sm rounded">
      {/* top section */}
      <GalleryTopSection />
      <hr />
      <Gallery />
    </div>
  );
};

export default GalleryHome;
