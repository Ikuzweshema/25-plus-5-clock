import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimeSetter({ time, setTime, min, max, interval, type }) {

    return <div className="d-flex justify-content-center gap-1 w-full">
        <button className="btn btn-sm btn-primary " onClick={() => (time > min ? setTime(time - interval) : null)}><FaArrowDown /></button>
        <button className="btn btn-sm btn-primary " onClick={() => (time < max ? setTime(time + interval) : null)}><FaArrowUp /></button>
    </div>
}