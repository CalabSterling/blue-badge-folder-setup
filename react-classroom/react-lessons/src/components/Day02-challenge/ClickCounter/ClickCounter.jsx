import React, { useState } from 'react';

const ClickCounter = (props) => {
   // let count = 0;
   const [count, setCount] = useState(0)
   const [isDisabled, setisDisabled] = useState(false);

    function handleClick(event){
        setCount(count + 1)
        if(count+1 === 10){
            setisDisabled(true);
        }
       console.log(count)
   }
   
   return ( <div>
        {count < 10 ? <button onClick={handleClick}>CLICK AWAY</button> : null}
        <p>Current Count: {count}</p>
        {count>9 ? <p>you clicked too many times</p> : null}
    </div> );
}
 
export default ClickCounter;