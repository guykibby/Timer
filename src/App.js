import { useState, useEffect } from "react";
import "./App.css";

let state = "PAUSE";
let prevState = "WORK";

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

// let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
// let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
// let hours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);

function App() {
  console.log("buggy");

  const [timerTime, whatTime] = useState(5);
  const [theState, whatState] = useState("PAUSED");

  useEffect(() => {
    const checkTime = () => {
      calcTime();
      whatTime(Math.floor(newTime));
      whatState(state);
    };

    setInterval(checkTime, 100);
  }, []);

  let mainState = "App-main " + theState;
  let timerBoxState = "timerbox Timer" + theState;

  return (
    <main className={mainState}>
      <div className={timerBoxState}>
        <p className="content">{timerTime}</p>
      </div>
      <div className="ModeDisplay">{theState}</div>

      <button className="PauseButton button" onClick={pauseTime}>
        {theState === "PAUSE" ? "START" : "PAUSE"}
      </button>
      <button className="SwitchButton button" onClick={switchstate}>
        SWITCH
      </button>
    </main>
  );
}

export default App;
