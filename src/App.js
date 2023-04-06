import React, { useEffect, useRef, useState } from "react";
import Name from "./components/Name";
import { AiFillAlert } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const data = "abc";
  const clickFunc = () => {
    setCount(count + 1);
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  const firstRef = useRef(0);
  console.log(firstRef);
  useEffect(() => {
    setColor("purple");
  }, []);

  return (
    <div className="App">
      <div style={{ color: color }}>colorful text</div>
      {count}
      <Name data={data} />
      <button onClick={clickFunc}>tıkla</button>
      <AiFillAlert />
    </div>
  );
}

export default App;
