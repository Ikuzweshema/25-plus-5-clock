export default function formatTime(time){
   const mins=Math.floor(time / 60);
   const secs=time % 60;
   return `${mins < 10 ? "0" + mins.toString() : mins}:${
    secs < 10 ? "0" + seconds.toString() : secs
  }`;
}