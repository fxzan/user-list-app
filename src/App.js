import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const initialList = JSON.parse(localStorage.getItem("users")) || [];
  const [usersList, setUsersList] = useState(initialList);

  function addUserHandler(enteredUser) {
    setUsersList((prevList) => {
      const newList = [...prevList, enteredUser];
      localStorage.setItem("users", JSON.stringify(newList));
      return newList;
    });
  }

  function deleteHandler(userID) {
    setUsersList((prevList) => {
      const newList = prevList.filter((user) => user.id !== userID);
      localStorage.setItem("users", JSON.stringify(newList));
      return newList;
    });
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList onDelete={deleteHandler} users={usersList} />
    </>
  );
}

export default App;
