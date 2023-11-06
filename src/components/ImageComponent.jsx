import { useState } from "react";

const ImageComponent = ({ handleSelected, img }) => {
  const [show, setShow] = useState(false);
  const [checkShow, setCheckShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    if (checkShow) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleCheckbox = (e, id) => {
    setCheckShow(e.target.checked);
    handleSelected(e, id);
  };

  return (
    <div
      className="object-cover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {show && (
        <>
          <div
            className={`absolute top-0 left-0 w-full h-full z-10 rounded ${
              img.checked ? "bg-gray-700 opacity-30 " : "bg-black opacity-50"
            }`}
          ></div>
          <input
            type="checkbox"
            onChange={(e) => handleCheckbox(e, img.id)}
            id={img.id}
            checked={img.checked}
            className="m-[20px] z-20 absolute form-checkbox h-5 w-5 text-blue-500 border-2 border-white rounded-md focus:outline-none focus:ring-2 ring-blue-300"
          />
          <label htmlFor={img.id} className="z-20 relative"></label>
        </>
      )}
      {img.content}
    </div>
  );
};

export default ImageComponent;
