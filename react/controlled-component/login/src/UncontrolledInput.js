import React, { useState } from "react";

const UncontrolledInput = ({ defaultValue, placeholder }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
};

export default UncontrolledInput;
