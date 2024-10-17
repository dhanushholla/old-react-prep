import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours = 0, initialMinutes =0, initialSeconds =10}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const[message,setMessage]=useState('')

  useEffect(() => {
    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) 
    {
        setMessage('Timer over refresh')
        return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount or when timeLeft changes
  }, [timeLeft]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        Time Remaining: {String(timeLeft.hours || '00').padStart(2, '0')}:
        {String(timeLeft.minutes || '00').padStart(2, '0')}:
        {String(timeLeft.seconds || '00').padStart(2, '0')}
      </p>
      {message&&<div>{message}</div>}
    </div>
  );
};

export default CountdownTimer;
