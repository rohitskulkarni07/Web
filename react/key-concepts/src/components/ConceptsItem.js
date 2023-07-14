import React from "react";
import "./ConceptsItem.css";

const ConceptsItem = (props) => {
  return (
    <>
      {props.concepts.map((item) => (
        <li className="concept">
          <img src={item.image} alt="TODO: TITLE" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </>
  );
};

export default ConceptsItem;
