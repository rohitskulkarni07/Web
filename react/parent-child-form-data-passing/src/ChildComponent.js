import "./styles.css";

const ChildComponent = ({ submittedData, handleFormSubmit }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {submittedData ? (
        <div>
          <p>
            Name: <span> {submittedData.name} </span>
          </p>
          <p>
            E-mail: <span> {submittedData.email} </span>
          </p>
          <p>
            Number: <span> {submittedData.number} </span>
          </p>
        </div>
      ) : (
        <p> No Data Submitted yet</p>
      )}

      <button onClick={handleFormSubmit}>Submit Data From Child</button>
    </div>
  );
};

export default ChildComponent;
