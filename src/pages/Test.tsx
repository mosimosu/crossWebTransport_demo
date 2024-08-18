import DraggableComponent from "../components/Draggable";
const Test = () => {
  const channel = new BroadcastChannel("test");

  return (
    <>
      <div>Test</div>
      <DraggableComponent channel={channel} />
    </>
  );
};

export default Test;
