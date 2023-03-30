import React from "react";

const Welcome = (props) => {
  //   console.log(props);

  return (
    <>
      <h1>
        Hello, {props.name}. Your address is {props.address}
      </h1>
      {props.children}
    </>
  );
};

export default Welcome;
