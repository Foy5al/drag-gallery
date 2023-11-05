import ImageComponent from "../components/ImageComponent";

const Gallery = ({ imgDivs, setImgDivs }) => {
  const handleImage = (e) => {
    e.preventDefault();
    let file = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files, file);
    setImgDivs([
      ...imgDivs,
      {
        id: imgDivs.length + 1,
        checked: false,
        content: <img src={file} alt="new image" />,
      },
    ]);
  };

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

  const handleSelected = (e, id) => {
    let tempData = [];

    imgDivs.forEach((element) => {
      if (element.id === id) {
        element.checked = e.target.checked;
        tempData.push(element);
      } else {
        tempData.push(element);
      }
    });
    setImgDivs(tempData);
  };

  return (
    <div className="p-5 grid grid-cols-5 gap-5 text-black">
      {imgDivs.length &&
        imgDivs.map((img, index) => (
          <div
            key={index + 10}
            content={img.content}
            draggable
            className={`text-left w-full border-gray-30 border border-2 rounded-md relative ${
              index === 0 ? " row-span-2 col-span-2" : ""
            }`}
            onDragStart={(e) => handleDragStart(e, img.id)}
            onDragOver={(e) => handleDragEnd(e)}
            onDrop={(e) => handleDrop(e, img.id)}
          >
            <ImageComponent
              key={img.id}
              handleSelected={handleSelected}
              img={img}
            />
          </div>
        ))}
      <div className="flex items-center align-middle border border-dashed border-2 rounded-md p-2">
        <input
          onChange={(e) => {
            handleImage(e);
          }}
          type="file"
          id="newImage"
        />
      </div>
    </div>
  );
};

export default Gallery;
