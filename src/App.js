import { useState } from "react";
import "./App.css";

let state = "PAUSE";
let prevState = "PAUSE";

let prevTime = 0;
let startTime = Date.now();
let newTime = 0;

const calcTime = () => {
  if (state === "WORK") {
    newTime = prevTime + (Date.now() - startTime) / 1000;
  } else if (state === "PLAY") {
    newTime = prevTime - (Date.now() - startTime) / 1000;
  }
};

let x = setInterval(calcTime, 1000);

const switchstate = () => {
  prevTime = newTime;
  startTime = Date.now();

  if (state === "WORK") {
    state = "PLAY";
  } else {
    state = "WORK";
  }
  return;
};

const pauseTime = () => {
  if (state !== "PAUSE") {
    prevState = state;
    state = "PAUSE";
  } else {
    prevTime = newTime;
    startTime = Date.now();
    state = prevState;
  }
};

function App() {
  console.log("buggy");

  const [timerTime, whatTime] = useState(5);
  const [theState, whatState] = useState("PAUSED");

  const checkTime = () => {
    calcTime();
    whatTime(Math.floor(newTime));
    whatState(state);
  };

  setInterval(checkTime, 100);

  return (
    <div className="App">
      <header className="App-header">
        <div>{timerTime}</div>
        <div>{theState}</div>
        <button onClick={switchstate}>WORK/PLAY</button>
        <button onClick={pauseTime}>PAUSE</button>
      </header>
    </div>
  );
}

export default App;
