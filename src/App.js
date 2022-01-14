import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <input
              placeholder="New Username"
              type="text"
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(updateUser({ id: user.id, username: newUsername }));
              }}
            >
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
