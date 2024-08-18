import Draggable from "./components/Draggable";

function App() {
  const handleClick = () => window.open("/test", "_blank");

  const channel = new BroadcastChannel("test");

  return (
    <>
      <h1>Hello World</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <Draggable channel={channel} />
    </>
  );
}

export default App;
