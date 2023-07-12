import React from "react";

const ControlledInput = (({value, onChange, placeholder}) => <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} required></input>);

export default ControlledInput;