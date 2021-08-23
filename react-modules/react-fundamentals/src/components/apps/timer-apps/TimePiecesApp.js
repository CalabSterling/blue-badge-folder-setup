import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import StopwatchApp from './StopWatch';

const TimePiecesApp = () => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <StopwatchApp />
            </div>
        </div>
     );
}
 
export default TimePiecesApp;