import { FaPause, FaPlay,FaStopwatch } from "react-icons/fa";
import formatTime from "../assets/helpers";
import { FaRepeat } from "react-icons/fa6";

export default function Display({
    displayState,
    reset,
    startStop
}) {
    return (<div className="card">
        <div className="card-header  d-flex justify-content-center" ><span style={{textTransform:"capitalize"}}><FaStopwatch /> {displayState.timeType}</span> </div>
        <div className="card-body d-flex justify-content-center">   <div ><span className={`${displayState.timerRunning ? "text-danger":""}`} style={{fontSize:60}}>{formatTime(displayState.time)}</span> </div></div>

        <div className="card-footer d-flex justify-content-center gap-3">
            <button className="btn btn-sm col-3 btn-primary" onClick={startStop}>{displayState.timerRunning ? <FaPause /> : <FaPlay />}</button>
            <button className="btn btn-sm col-3 btn-danger" onClick={reset}><FaRepeat /></button>
        </div>
    </div>)
}