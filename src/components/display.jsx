import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import formatTime from "../assets/helpers";

export default function Display({
    displayState,
    reset,
    startStop
}) {
    return (<div className="content">
        <h4>{displayState.timerType}</h4>
        <span>{formatTime(displayState.time)}</span>
        <div>
            <button>{displayState.timerRunning ? <FaPause /> : <FaPlay />}</button>
            <button onClick={reset}><FaUndo/></button>
        </div>
    </div>)
}