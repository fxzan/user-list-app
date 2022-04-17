import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function addUserHandler(event) {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be greater than or equal to 1.",
      });
      return;
    }
    props.onAddUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button className="center" type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
