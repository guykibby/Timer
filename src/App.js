import { useState, useEffect } from "react";
import "./App.css";
import settingsIcon from "./SettingsIcon.png";
import pauseIcon from "./Pause.png";
import playIcon from "./Play.png";

let state = JSON.parse(window.localStorage.getItem("theState")) || "PAUSE";
let prevState = "WORK";

let prevTime = JSON.parse(window.localStorage.getItem("timerTime")) || 0;
let startTime = Date.now();
let newTime = JSON.parse(window.localStorage.getItem("timerTime")) || 0;

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
  const [timerTime, whatTime] = useState(prevTime);
  const [theState, whatState] = useState("PAUSED");

  useEffect(() => {
    const checkTime = () => {
      calcTime();
      whatTime(Math.floor(newTime));
      whatState(state);
      // console.log("buggy");
    };
    // console.log(timerTime);

    setInterval(checkTime, 100);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("timerTime", JSON.stringify(timerTime));
    // window.localStorage.setItem("theState", JSON.stringify(theState));
  }, [timerTime]);

  let timerBoxState = "timerbox Timer" + theState;
  let runImg = theState === "PAUSE" ? playIcon : pauseIcon;

  return (
    <main className={theState}>
      <section className="App-main">
        <div className={timerBoxState} onClick={switchstate}>
          <p className="numDisplay">{timerTime}</p>
        </div>
        <div className="ModeDisplay">{theState}</div>

        <img className="settings" src={settingsIcon} alt="settings" />
        <img
          className="pause-play"
          src={runImg}
          alt="play"
          onClick={pauseTime}
        />
      </section>
    </main>
  );
}

export default App;
