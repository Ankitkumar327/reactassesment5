import React, { useState, createContext } from "react";

export const Studentcontext = createContext();

export const StudentProvider = (props) => {
  const [students, setStudents] = useState([
    {
      Id: "1",
      Name: "Liam",
      Age: "22",
      Course: "MERN",
      Batch: "Oct",
    },

    {
      Id: "2",
      Name: "Noah",
      Age: "20",
      Course: "MERN",
      Batch: "Nov",
    },

    {
      Id: "3",
      Name: "Elijah",
      Age: "24",
      Course: "MERN",
      Batch: "Oct",
    },

    {
      Id: "4",
      Name: "William",
      Age: "20",
      Course: "MERN",
      Batch: "Nov",
    },

    {
      Id: "5",
      Name: "James",
      Age: "21",
      Course: "MERN",
      Batch: "Oct",
    },

    {
      Id: "6",
      Name: "Benjamin",
      Age: "22",
      Course: "MERN",
      Batch: "Nov",
    },

    {
      Id: "7",
      Name: "Lucas",
      Age: "23",
      Course: "MERN",
      Batch: "Nov",
    },
  ]);

  return (
    <Studentcontext.Provider value={[students, setStudents]}>
      {props.children}
    </Studentcontext.Provider>
  );
};
