import React, { useEffect, useState } from 'react';

function UEffect() {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinute + 1;
            });
            return 0;
          }
          return prevSecond + 1;
        });
      }, 10);
    }

    // Cleanup: stop the interval when running changes or component unmounts
    return () => clearInterval(timer);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setHours(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <div>
      <h1 className="heading">Stop Watch</h1>
      <div>
        <h1 className="heading">
          

          <h1 className='heading'><span>{hours}</span> : <span>{minute}</span> :<span>{second}</span></h1>
        </h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default UEffect;
