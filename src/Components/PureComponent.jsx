import React, { useState } from "react";

export default function PureComp() {
  const myStyle = {
    backgroundColor: "coral",
    padding: "4px 5px",
  };

  const [count, setCount] = useState(10);

  const handleCount = () => {
    setCount(count + 10);
  };
  return (
    <>
      <h3> {count} </h3>
      <button onClick={handleCount} style={myStyle}>
        Increase Count
      </button>
    </>
  );
}
