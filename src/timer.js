import React from "react";

let start = Date.now();

console.log(Date.now() / 1000);

const WhatTime = () => {
  let timeSince = Math.floor((4105854000000 - Date.now()) / 1000);
  console.log(timeSince);
  // console.log(Date.now());
  return timeSince;
};

// const renderTimer = () => {
//   ReactDOM.render(<WhatTime />, document.getElementById("WhatTime"));
// };

let myVar = setInterval(WhatTime, 10000);
console.log("myVar;" + myVar);

// clearTimeout(myVar);

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
