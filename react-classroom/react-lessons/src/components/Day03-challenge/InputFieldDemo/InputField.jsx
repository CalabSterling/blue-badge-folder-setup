import React, { useState } from "react";

const InputField = (props) => {
    const [username, setUsername] = useState('robo');

    function handleOnChange(e){
        setUsername(e.target.value)
    }

    return ( 
        <div>
            <p>Hello from InputField</p>
            <input type="text" value={username} onChange={handleOnChange}/>
        </div>
     );
}
 
export default InputField;