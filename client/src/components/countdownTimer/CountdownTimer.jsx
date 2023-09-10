/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import moment from "moment";
import "./countdownTimer.scss";

const CountdownTimer = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = moment();
    const endDateTime = moment(endTime);
    const duration = moment.duration(endDateTime.diff(now));
    return duration;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdownTimer">
      <p>
        {timeRemaining.days()}
        <span>DAYS</span>
      </p>
      <p>
        {timeRemaining.hours()}
        <span>HOURS</span>
      </p>
      <p>
        {timeRemaining.minutes()}
        <span>MINUTES</span>
      </p>
      <p>
        {timeRemaining.seconds()}
        <span>SECONDS</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
