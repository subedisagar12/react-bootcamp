import React, { useState } from "react";

// List Rendering in react

const ListRendering = () => {
  //   const [student, setStudent] = useState(["Ram", "Sita", "Hari"]);

  const [coders, setCoders] = useState([
    {
      id: 1,
      name: "Ram",
      age: 22,
      language: "JS",
    },

    {
      id: 2,
      name: "Sita",
      age: 20,
      language: "Python",
    },

    {
      id: 3,
      name: "Hari",
      age: 19,
      language: "JS",
    },

    {
      id: 4,
      name: "Hari",
      age: 20,
      language: "C++",
    },
  ]);

  return (
    <>
      <h1>List Rendering in React</h1>

      {coders.map((coder) => (
        <p key={coder.id}>
          My name is {coder.name}. I am {coder.age} years old. My language is{" "}
          {coder.language}
        </p>
      ))}

      {/* <h2>{student[0]}</h2>
      <h2>{student[1]}</h2>
      <h2>{student[2]}</h2>
      <h2>{student[3]}</h2> */}

      {/* {student.map((x) => (
        <h2>{x}</h2>
      ))} */}
    </>
  );
};

export default ListRendering;
