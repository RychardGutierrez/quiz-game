import { useEffect, useState } from 'react';

const Timer = ({ setStopGame, questionNumber }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setStopGame(true);
    }
    const intervat = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervat);
  }, [setStopGame, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return (
    <>
      <div className="top">
        <div className="timer">{timer}</div>
      </div>
    </>
  );
};

export default Timer;
