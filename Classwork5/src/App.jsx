import React, { useState } from "react";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const userFunction = (arg) => {
  //   setUsername(arg.target.value);
  // };

  // const passFunction = (arg) => {
  //   setPassword(arg.target.value);
  // };

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <h1>Header</h1>
      {/* <input type="text"  onChange={userFunction} />
      <input type="password"  onChange={passFunction} />

      <p>your name: {username}</p>
      <p>your password: {password}</p> */}

      <input
        type="text"
        onChange={(event) => setUser({ ...user, username: event.target.value })}
      />
      <input
        type="password"
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />

      <p>your name: {user.username}</p>
      <p>your password: {user.password}</p>
    </>
  );
}

export default App;
