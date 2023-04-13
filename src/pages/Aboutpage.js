import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AboutPage = (props) => {
  let { user } = useContext(UserContext);

  return (
    <>
      <h1>My name is {user.name}</h1>
    </>
  );
};

export default AboutPage;
