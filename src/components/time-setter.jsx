import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimeSetter({time, setTime, min, max, interval, type}) {

    return <div className="d-flex gap-2 w-full">
        <button className="btn btn-sm btn-primary col-2" onClick={() => (time > min ? setTime(time - interval) : null)}><FaArrowDown /></button>
        <button  className="btn btn-sm btn-primary col-2" onClick={() => (time < max ? setTime(time + interval) : null)}><FaArrowUp /></button>
    </div>
}