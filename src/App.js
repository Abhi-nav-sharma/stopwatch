import { useState } from "react";
import Stopwatch from "./components/Stopwatch";
import "./styles.css";

export default function App() {
  const [showWatch, setshowWatch] = useState(true);
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      {showWatch && <Stopwatch />}
      {showWatch && (
        <button onClick={() => setshowWatch(!showWatch)}>Hide Stopwatch</button>
      )}
      {!showWatch && (
        <button onClick={() => setshowWatch(!showWatch)}>Show Stopwatch</button>
      )}
    </div>
  );
}
