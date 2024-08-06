import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
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

    return <>
        <div className="container-fluid">
            <div className="row mt-3 w-80 d-flex justify-content-center">
                  <center><h1>25+5 Clock</h1></center>
                <div className="col sm-4 ">
                    <div className="card">
                        <div className="card-header">
                            Break Length
                        </div>
                        <div className="card-body p-3"></div>
                        <div className="p-2">5</div>
                    </div>
                </div>
                <div className="col sm-4">
                    <div className="card">
                        <div className="card-header">
                            Session Length
                        </div>
                        <div className="card-body d-flex justify-content-center p-3"></div>
                        <div className="p-2">5</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}