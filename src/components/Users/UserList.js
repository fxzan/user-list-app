import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

function UserList(props) {

    function deleteHandler(event) {
        props.onDelete(event.target.id);
    }

  return (
    <Card className="users">
      {props.users.length === 0 ? (
        <h2>No users.</h2>
      ) : (
        <ul>
          {props.users.map((user) => (
            <li key={user.id} id={user.id} onClick={deleteHandler}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default UserList;
