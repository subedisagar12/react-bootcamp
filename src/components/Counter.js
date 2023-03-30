import React, { useState } from "react";

// 1. Import useState hook from react

const Counter = () => {
  let [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button
        //   onClick={increment}
        onClick={() => {
          setCount(count + 1);
        }}

        // sometimes used by few developers
        // onClick={() => {
        //   increment();
        // }}
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
