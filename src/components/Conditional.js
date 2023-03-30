import React, { useState } from "react";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   if user is logged in, show welcome
  // else show , You are not logged in

  //   if (isLoggedIn === true) {
  //     return (
  //       <>
  //         <p>Welcome to our website</p>

  //         <h1>Welcome</h1>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <p>Welcome to our website</p>

  //         <h1>You are not logged in</h1>
  //       </>
  //     );
  //   }

  return (
    <>
      <p>Welcome to our website</p>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>You are not logged in</h1>}

      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn === true ? "Logout" : "Log in"}
      </button>

      {/* <h1> {isLoggedIn ? "Welcome" : "You are not logged in"} </h1> */}
    </>
  );
};

export default Conditional;
