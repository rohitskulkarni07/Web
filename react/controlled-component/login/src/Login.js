import React, { useState } from "react";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ControlledInput
          value={email}
          onChange={setEmail}
          placeholder="Email"
        ></ControlledInput>
        <ControlledInput
          value={password}
          onChange={setPassword}
          placeholder="Password"
        ></ControlledInput>
        <UncontrolledInput defaultValue="number" placeholder="contact" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
