import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TimeSetter from "./components/time-setter";
import Display from "./components/display";
import AlarmSound from "../src/assets/AlarmSound.mp3";
import { FaStopwatch, FaPause, FaClock } from "react-icons/fa";

const defaultBreakTime = 5 * 60;
const defaultSession = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

export default function App() {
    const [breakTime, setBreakTime] = useState(defaultBreakTime);
    const [sessionTime, setSessionTime] = useState(defaultSession);
    const [displayState, setDisplayState] = useState({
        time: defaultSession,
        timeType: "session",
        timerRunning: false
    });
    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === " ") {
                e.preventDefault();
                startStop();

            }
        }
        window.addEventListener("keypress", handleKeyPress);

        return () => window.removeEventListener("keypress", handleKeyPress);
    }, [])
    useEffect(() => {
        let timerId;
        if (displayState.timerRunning) {
            timerId = window.setInterval(decrementDisplay, 1000);
        }
        return () => window.clearInterval(timerId);
    }, [displayState.timerRunning]);

    useEffect(() => {
        if (displayState.time === 0) {
            const audio = document.getElementById("beep");
            audio.currentTime = 0;
            audio.play().catch(e => console.log(e));

            setDisplayState(prev => ({
                ...prev,
                timeType: prev.timeType === "session" ? "break" : "session",
                time: prev.timeType === "session" ? breakTime : sessionTime
            }));
        }
    }, [displayState.time, breakTime, sessionTime]);

    function reset() {
        setBreakTime(defaultBreakTime);
        setSessionTime(defaultSession);
        setDisplayState({
            time: defaultSession,
            timeType: "session",
            timerRunning: false
        });
        const audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime = 0;
    }

    function startStop() {
        setDisplayState(prev => ({
            ...prev,
            timerRunning: !prev.timerRunning
        }));
    }

    function decrementDisplay() {
        setDisplayState(prev => ({
            ...prev,
            time: prev.time - 1
        }));
    }

    function changeBreakTime(time) {
        if (!displayState.timerRunning) {
            setBreakTime(time);
        }
    }

    function changeSessionTime(time) {
        if (!displayState.timerRunning) {
            setSessionTime(time);
            setDisplayState({
                time: time,
                timeType: "session",
                timerRunning: false
            });
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row mt-3 w-50">
                <center className="p-4">
                    <h1>CLOCK <FaStopwatch /></h1>
                </center>
                <div className="col sm-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center">
                            <span className="text-center" style={{ fontWeight: 500 }}>
                                <FaPause /> Break Length
                            </span>
                        </div>
                        <div className="card-body p-3">
                            <TimeSetter time={breakTime} setTime={changeBreakTime} min={min} max={max} interval={interval} type={"break"} />
                        </div>
                    </div>
                </div>
                <div className="col sm-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-center">
                            <span className="text-center" style={{ fontWeight: 500 }}>
                                <FaClock /> Session Length
                            </span>
                        </div>
                        <div className="card-body d-flex justify-content-center p-3">
                            <TimeSetter time={sessionTime} setTime={changeSessionTime} min={min} max={max} interval={interval} type={"session"} />
                        </div>
                    </div>
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <div className="col sm-4">
                        <Display displayState={displayState} reset={reset} startStop={startStop} />
                        <audio id="beep" src={AlarmSound} />
                    </div>
                </div>
            </div>
        </div>
    );
}
