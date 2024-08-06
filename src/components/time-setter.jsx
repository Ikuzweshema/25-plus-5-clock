import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TimeSetter({time, setTime, min, max, interval, type}) {

    return <div>
        <button onClick={() => (time > min ? setTime(time - interval) : null)}><FaArrowDown /></button>
        <button onClick={() => (time < max ? setTime(time + interval) : null)}><FaArrowUp /></button>
    </div>
}