import React, { useState } from "react";

function App() {
  const [header, setHeader] = useState(32);

  const fonter = (event) => {
    setHeader(parseInt(event.target.value));
  };

  return (
    <>
      <h1>Header</h1>
      <input type="range" onChange={fonter} />
      <h1 style={{ fontSize: header + 10 }}>adjustment done</h1>
    </>
  );
}

export default App;
