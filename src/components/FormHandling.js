import React, { useState } from "react";

const FormHandling = () => {
  const [firstName, setFirstName] = useState("");
  const [lName, setLName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />

      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={(e) => {
          setLName(e.target.value);
        }}
      />

      <br />

      <br />

      <button
        onClick={() => {
          alert(firstName + " " + lName);
        }}
      >
        Show Data
      </button>
    </>
  );
};

export default FormHandling;
