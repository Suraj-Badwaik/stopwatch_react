import React, { useState } from "react";
import styles from "./stopwatch.module.css";

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
//   console.log(msToTime(300000))

const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const start = () => {
    const id = setInterval(() => {
      if (watch > 100) {
        clearInterval(id);
      } else {
        setWatch((watch) => watch + 100);
      }
    }, 100);
    setTimerId(id);
  };

  const pause = () => {
    clearInterval(timerId);
  };

  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
  };

  return (
    <div className={styles.watch}>
      <div className={styles.watchDiv}>
        <h1>Stopwatch</h1>
        <h2>{msToTime(watch)}</h2>
        <button className={styles.btn1} onClick={start}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/840/840513.png"
            alt=""
          />
        </button>
        <button className={styles.btn2} onClick={pause}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190521.png"
            alt=""
          />
        </button>
        <button className={styles.btn3} onClick={reset}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5038/5038573.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
