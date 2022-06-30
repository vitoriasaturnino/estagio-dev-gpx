import { useState } from "react";

const Relogio = () => {
  let time: any = new Date().toLocaleTimeString();
  const [currentTime,  setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return(
    <div>
      <h1>{currentTime}</h1>
    </div>
  )

}
export default Relogio;