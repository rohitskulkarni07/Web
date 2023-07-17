
const Child = (props) => {
  return (
    <>
      {props.isDisplay && (
        <>
          <h3>name: {props.formData.name} </h3>
          <h3>email: {props.formData.number} </h3>
          <h3>name: {props.formData.email} </h3>
        </>
      )}

      <button type="submit" onClick={props.handleSubmit}>
        {" "}
        Submit{" "}
      </button>
    </>
  );
};

export default Child;
