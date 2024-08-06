import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TimeSetter from "./components/time-setter";
import Display from "./components/display";
import AlarmSound from "../src/assets/AlarmSound.mp3";
import { FaStopwatch,FaPause, FaClock } from "react-icons/fa";
const defaulBreakTime = 5 * 60;
const defaultSession = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;
export default function App() {
    const [breakTime, setBreakTime] = useState(defaulBreakTime);
    const [sessionTime, setSessionTime] = useState(defaultSession);
    const [displayState, setDisplayState] = useState({
        time: sessionTime,
        timeType: "session",
        timerRunning: false
    });
    function reset() {
        console.log("reset");

    }
    function startStop() {
        console.log("startStop");

    }
    return <>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row mt-3 w-50 ">
                
                <center  className="p-4"> <h1>CLOCK <FaStopwatch /></h1> </center>
                <div className="col sm-4 ">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center">
                           <span className="text-center" style={{fontWeight:500}}> <FaPause/> Break Length</span>  

                        </div>
                        <div className="card-body p-3">
                            <TimeSetter time={breakTime} setTime={setBreakTime} min={min} max={max} interval={interval} type={"break"} />
                        </div>
                        <div className="p-2">5</div>
                    </div>
                </div>
                <div className="col sm-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center">

                            <span className="text-center" style={{fontWeight:500}}> <FaClock/> Session Length</span>  
                        </div>
                        <div className="card-body d-flex justify-content-center p-3">
                            <TimeSetter time={sessionTime} setTime={setSessionTime} min={min} max={max} interval={interval} type={"session"} />
                        </div>
                        <div className="p-2">5</div>
                    </div>
                </div>
                <div className=" mt-3  d-flex justify-content-center">
                    <div className="col sm-4">
                        <Display displayState={displayState} reset={reset} startStop={startStop} />
                        <audio src={AlarmSound} />
                    </div>

                </div>
            </div>

        </div>
    </>
}