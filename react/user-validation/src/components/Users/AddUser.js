import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();
    const nameFromRef = nameInputRef.current.value;
    const ageFromRef = ageInputRef.current.value;
    if (nameFromRef.trim().length === 0 && ageFromRef.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter valid input",
      });
      return;
    }
    if (+ageFromRef < 1) {
      setError({
        title: "Invalid Input!",
        message: "Please enter valid age!",
      });
      return;
    }
    props.onAddUser(nameFromRef, ageFromRef);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
    // };
    // const usernameChangeHandler = (e) => {
    //   setEnteredUsername(e.target.value);
    // };

    // const ageChangeHandler = (e) => {
    //   setEnteredAge(e.target.value);
    // };
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            // onChange={ageChangeHandler}
            // value={enteredAge}
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
