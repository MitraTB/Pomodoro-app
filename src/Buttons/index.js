import React, { useState } from "react";


export default function Buttons(props) {
  const { timeFormat } = props;
  //let isTimerRunning = false;
  let [currentTime , setCurrentTime] = useState (1500);
  let workTimeDuration = 1500;
  var clockTime = null;

 function startTimer(){
   clockTime = setInterval(()=>{
    setCurrentTime(currentTime --);
    timeFormat (currentTime);
  },1000);
  return clockTime;
};
 
function pauseTimer (){
  
  clearInterval(clockTime);
  //DisplayTime(currentTimeLeft);
  
};

function stopTimer (){
clearInterval(clockTime);
currentTime = workTimeDuration;
timeFormat(currentTime);
};

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}