// import React from "react";

let start = Date.now();

const WhatTime = () => {
  let timeSince = Date.now() - start;
  console.log(timeSince);
  return timeSince;
};

// console.log(start);

// let posTime = 0;

// while (true) {
//   posTime = Date.now() - start;
// }

const Timer = () => {
  console.log("buggy");

  return (
    <>
      <h1>Goodbye World</h1>
      <h3>Seconds until the singularity:</h3>
      <WhatTime />
      <button onClick={WhatTime}>PUSH</button>
    </>
  );
};

export default Timer;
