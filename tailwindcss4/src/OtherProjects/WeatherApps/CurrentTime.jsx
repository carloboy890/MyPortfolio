import { useEffect, useState } from "react";
import { formatTimeForTimezone } from "./formatTime";

function CurrentTime({ timezone, className }) {
  const [time, setTime] = useState(formatTimeForTimezone(timezone));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTimeForTimezone(timezone));
    }, 1000);

    return () => clearInterval(id);
  }, [timezone]);

  return <div className={className}>{time}</div>;
}

export default CurrentTime;
