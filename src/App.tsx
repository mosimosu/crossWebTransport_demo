function App() {
  const handleClick = () => window.open("/test", "_blank");
  return (
    <>
      <h1>Hello World</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </>
  );
}

export default App;
