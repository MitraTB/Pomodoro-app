import React  from "react";
import Buttons from "./Buttons";
import DisplayTime from "./DisplayTime";

//import './App.css';

function App() {
  //let [result , setResult] = useState("25 : 00");
  let result;
  const displayCurrentTimeLeft = (time) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    function addZeroToTime(times) {
      return times < 10 ? `0${times}` : times;
    }
    result = `${addZeroToTime(minutes)} : ${addZeroToTime(seconds)}`;
    console.log(result);
    //console.log(setResult);
     };
    

  return (
    <div className="App">
      <DisplayTime result={result} />
      <Buttons timeFormat={displayCurrentTimeLeft} />
    </div>
  );
}

export default App;
