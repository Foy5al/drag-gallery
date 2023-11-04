import React, { useState } from "react";
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

const Gallery = () => {
  const imgLoop = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img10,
    img11,
  ];
  const [message, setMessage] = useState("");

  const dragStart = (event) => {
    console.log(event.target.id);
    event.dataTransfer.setData("text1", event.target.id);
  };

  const dragEnter = (event) => {
    if (event.target.className === "droptarget") {
      setMessage("Entered the dropzone");
      event.target.style.backgroundColor = "lightblue";
    }
  };

  const dragLeave = (event) => {
    if (event.target.className === "droptarget") {
      setMessage("Left the dropzone");
      event.target.style.backgroundColor = "";
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    console.log(event.target.id, "drop");
    event.dataTransfer.setData("text2", event.target.id);
    event.preventDefault();
    const data1 = event.dataTransfer.getData("text1");
    const data2 = event.dataTransfer.getData("text2");
    console.log(data1, data2);
    event.target.appendChild(document.getElementById(data1));
    //event.target.appendChild(document.getElementById(data2));
  };
  return (
    <div className="text-black grid grid-cols-5 p-10 gap-2">
      {imgLoop.map((item, index) => (
        <div
          key={index}
          id={index}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
          onDragOver={allowDrop}
          className={`w-full border-gray-30 ${
            index === 0 ? " row-span-2 col-span-2" : ""
          }`}
        >
          <img
            id={index}
            onDragStart={dragStart}
            draggable="true"
            className={`border border-2 rounded-md`}
            src={item}
            alt=""
          />
        </div>
      ))}
      <div className="border border-2 rounded-md text-black my-auto">
        <p>Add Image</p>
      </div>
      {/* {" "}
      <style>{`
        .droptarget {
          width: 100px; 
          height: 35px;
          padding: 10px;
          border: 1px solid black;
        }
      `}</style>
      <div
        className=""
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={drop}
        onDragOver={allowDrop}
      >
        <p onDragStart={dragStart} draggable="true" id="dragtarget">
          Drag me!
        </p>
      </div>
      <br />
      <div
        className="droptarget"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={drop}
        onDragOver={allowDrop}
      ></div>
      <p id="demo">{message}</p> */}
    </div>
  );
};

export default Gallery;
