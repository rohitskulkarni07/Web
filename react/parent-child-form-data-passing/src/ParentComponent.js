import { useState } from "react";
import "./styles.css";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [submittedData, setSubmittedData] = useState({});

  const [error, setError] = useState({ name: "", email: "", number: "" });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    setError(() => ({
      ...error,
      [e.target.name]: "",
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // submit data if valid
    if (isFormValid()) {
      setSubmittedData(formData);
    }
  };

  const isFormValid = () => {
    let isValid = true;

    if (formData.number.trim().length !== 10) {
      setError((error) => ({
        ...error,
        number: "Mobile number must be 10 digits long.",
      }));
      isValid = false;
    }

    if (!formData.name.trim()) {
      setError((error) => ({
        ...error,
        name: "Name cannot be blank",
      }));
      isValid = false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())) {
      setError((error) => ({
        ...error,
        email: "Email cannot be empty or invalid",
      }));
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="parent-component">
      <h2>Parent Component</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {error.name && <span className="error">{error.name}</span>}
        </label>
        <label>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {error.email && <span className="error">{error.email}</span>}

        </label>
        <label>
          Number{" "}
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
          {error.number && <span className="error">{error.number}</span>}
        </label>
      </form>
      <ChildComponent
        className="child-component"
        submittedData={submittedData}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ParentComponent;
