import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import { UserContext } from "../../../Context/UserContext";

// import { AuthContext, AuthProvider } from "../../../Context/AuthContext";
import AboutForm from "./AboutForm";

function About() {
  const { student, user, changeUser } = useContext(UserContext);

  console.log(student.name);

  const [count, setCount] = useState(2);
  const [calculation, setCalculation] = useState(2);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  const [add, setAdd] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAdd((add) => add + 1);
    }, 100);
  });

  return (
    
    
    <div>
      <p
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "20px",
          fontSize: "50px",
        }}
      >
        Total Client: {add}
      </p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>

      <h2>This is {student.name} About Page From Officials</h2>

      <h2>
        {" "}
        My Name is {student.name} and my Age is {student.age} and i m from{" "}
        {student.home}{" "}
      </h2>

      <div className="div" style={{ background: "#eee", padding: "1rem" }}>
        <h1>Hello ,{user}!</h1>
        <button
          style={{ height: "20px", width: "100px", backgroundColor: "red" }}
          onClick={changeUser}
        >
          Change User
        </button>
      </div>

      <AboutForm />
    </div>
  );
}

export default About;
