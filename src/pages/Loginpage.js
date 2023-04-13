import React, { useState, useContext } from "react";

import { UserContext } from "../context/UserContext";

const Loginpage = (props) => {
  let { user } = useContext(UserContext);

  return (
    <>
      <h1>Login Page-{user.name} </h1>
    </>
  );
};

export default Loginpage;
