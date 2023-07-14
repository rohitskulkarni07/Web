import React from "react";
import "./Concepts.css";

const Concepts = (props) => {
  return <ul id={props.id}>{props.children}</ul>;
};

export default Concepts;
