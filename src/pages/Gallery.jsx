import { useState } from "react";
import img1 from "../assets/images/image-1.webp";
import img2 from "../assets/images/image-2.webp";
import img3 from "../assets/images/image-3.webp";
import img4 from "../assets/images/image-4.webp";
import img5 from "../assets/images/image-5.webp";
import img6 from "../assets/images/image-6.webp";
import img7 from "../assets/images/image-7.webp";

const Gallery = () => {
  const [show, setShow] = useState(true);
  const [checkedInp, setCheckedInp] = useState(true);
  const [imgDivs, setImgDivs] = useState([
    { id: 1, content: <img src={img1} alt="Image 1" /> },
    { id: 2, content: <img src={img2} alt="Image 2" /> },
    { id: 3, content: <img src={img3} alt="Image 3" /> },
    { id: 4, content: <img src={img4} alt="Image 3" /> },
    { id: 5, content: <img src={img5} alt="Image 3" /> },
    { id: 6, content: <img src={img6} alt="Image 3" /> },
    { id: 7, content: <img src={img7} alt="Image 3" /> },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
  };

  // drop functionality
  const handleDrop = (e, id) => {
    e.preventDefault();
    //find drag item
    const draggedItemId = e.dataTransfer.getData("text/plain");
    const draggedItem = imgDivs.find(
      (div) => div.id === parseInt(draggedItemId)
    );

    //find drop item
    const dropItem = imgDivs.find((div) => div.id === id);

    //update image div
    const updatedDivs = imgDivs.map((div) => {
      if (div.id === draggedItem.id) {
        return { ...div, content: dropItem.content };
      }
      if (div.id === dropItem.id) {
        return { ...div, content: draggedItem.content };
      }
      return div;
    });

    setImgDivs(updatedDivs);
  };

  //handle Delete function
  const handleDelete = (e, id) => {
    console.log(e, id);
  };
  const handleSelected = (e, id) => {
    e.preventDefault();
    setCheckedInp(!checkedInp);
  };

  return (
    <div className="p-2 grid grid-cols-5 gap-2 text-black">
      {imgDivs.length &&
        imgDivs.map((div, index) => (
          <>
            <div
              key={div.id}
              content={div.content}
              draggable
              className={`text-left w-full border-gray-30 border border-2 rounded-md hover:  ${
                index === 0 ? " row-span-2 col-span-2" : ""
              }`}
              onDragStart={(e) => handleDragStart(e, div.id)}
              onDragOver={(e) => handleDragEnd(e)}
              onDrop={(e) => handleDrop(e, div.id)}
            >
              {show && (
                <>
                  <input
                    className="text-left"
                    type="checkbox"
                    checked={checkedInp}
                    onChange={(e) => handleSelected(e, div.id)}
                    id={div.id}
                  />
                  <label htmlFor={div.id}></label>
                </>
              )}
              {div.content}
            </div>
          </>
        ))}
    </div>
  );
};

export default Gallery;
