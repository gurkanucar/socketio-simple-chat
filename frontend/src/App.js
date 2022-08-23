import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login/Login";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
