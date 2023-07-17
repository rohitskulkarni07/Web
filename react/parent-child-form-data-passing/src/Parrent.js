import { useState } from "react";
import Child from "./Child";
import "./style.css";
const Parent = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: ""
  });

  const [isDisplay, setIsDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisplay(true);
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:{" "}
          <input
            name="name"
            value={formData.name}
            type="text"
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          {" "}
          Number:{" "}
          <input
            name="number"
            value={formData.number}
            type="number"
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          {" "}
          Email:{" "}
          <input
            name="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
          />{" "}
        </label>
        <Child
          onSubmit={handleSubmit}
          isDisplay={isDisplay}
          formData={formData}
        />
      </form>
    </div>
  );
};

export default Parent;
