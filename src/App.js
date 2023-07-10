import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h1>Typing Test</h1>
      <input type="text" value={userInput}></input>
    </div>
  );
}

export default App;
