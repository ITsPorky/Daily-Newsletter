import React, { useState, useEffect } from "react";
import { ReactComponent as ClockIcon } from "./icons/clock.svg";
import { ReactComponent as CalenderIcon } from "./icons/calendar.svg";

function Date() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="App">
      <CalenderIcon />
      <p>
        {" "}
        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <ClockIcon />
      <p>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
}

export default Date;
