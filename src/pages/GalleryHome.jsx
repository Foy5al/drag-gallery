import { useState } from "react";
import Gallery from "./Gallery";
import GalleryTopSection from "./GalleryTopSection";
import img1 from "../assets/images/image-1.webp";
import img2 from "../assets/images/image-2.webp";
import img3 from "../assets/images/image-3.webp";
import img4 from "../assets/images/image-4.webp";
import img5 from "../assets/images/image-5.webp";
import img6 from "../assets/images/image-6.webp";
import img7 from "../assets/images/image-7.webp";
import img8 from "../assets/images/image-8.webp";
import img9 from "../assets/images/image-9.webp";
import img10 from "../assets/images/image-10.jpeg";
import img11 from "../assets/images/image-11.jpeg";

const GalleryHome = () => {
  const [imgDivs, setImgDivs] = useState([
    { id: 1, checked: false, content: <img src={img11} alt="Image 1" /> },
    { id: 2, checked: false, content: <img src={img2} alt="Image 2" /> },
    { id: 3, checked: false, content: <img src={img3} alt="Image 3" /> },
    { id: 4, checked: false, content: <img src={img4} alt="Image 4" /> },
    { id: 5, checked: false, content: <img src={img5} alt="Image 5" /> },
    { id: 6, checked: false, content: <img src={img6} alt="Image 6" /> },
    { id: 7, checked: false, content: <img src={img7} alt="Image 7" /> },
    { id: 8, checked: false, content: <img src={img8} alt="Image 8" /> },
    { id: 9, checked: false, content: <img src={img9} alt="Image 9" /> },
    { id: 10, checked: false, content: <img src={img10} alt="Image 10" /> },
    { id: 11, checked: false, content: <img src={img1} alt="Image 11" /> },
  ]);

  return (
    <div className="bg-white shadow-sm rounded">
      {/* top section */}
      <GalleryTopSection imgDivs={imgDivs} setImgDivs={setImgDivs} />
      <hr />
      <Gallery imgDivs={imgDivs} setImgDivs={setImgDivs} />
    </div>
  );
};

export default GalleryHome;
