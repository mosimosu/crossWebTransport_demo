import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const DraggableComponent = ({ channel }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });

    // 送出資料
    channel.postMessage({ left: data.x, top: data.y });
  };

  useEffect(() => {
    channel.onmessage = (e) => {
      const newX = -window.innerWidth + e.data.left;
      const newY = e.data.top;
      setPosition({ x: newX, y: newY });
    };
  }, [channel]);

  return (
    <Draggable position={position} onDrag={handleDrag} nodeRef={draggableRef}>
      <div
        ref={draggableRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          cursor: "grab",
        }}
      >
        拖曳我
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
