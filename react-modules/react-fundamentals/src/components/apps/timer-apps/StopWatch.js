import React, {useState, useEffect, useRef} from "react";

const StopwatchApp = () => {
    const startTimeRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(update, 10);

            return () => { clearInterval(interval) }
        }
    });

    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.now();
    }

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now()
    }

    const stop = () => {
        setIsRunning(false);
    }

    const lap = () => {
        setLaps([...laps, time]);
    }

    const reset = () => {
        setTime(0);
        setLaps([]);
    }

    return ( 
        <div>
            <p>
                {Math.floor((time / 1000) / 60).toString() } :
                {Math.floor((time / 1000) % 60).toString() }
            </p>
            {isRunning ? <button onClick={ stop }>Stop</button> : <button onClick={ start }>Start</button>}
            {isRunning ? <button onClick={ lap }>Lap</button> : <button onClick={ reset }>Reset</button>}
            { laps.map(time => {
                return (
                    <p>
                        {Math.floor((time / 1000) / 60).toString()} :
                        {Math.floor((time / 1000) % 60).toString()}
                    </p>
                )
            })
            }
        </div>
     );
}
 
export default StopwatchApp;