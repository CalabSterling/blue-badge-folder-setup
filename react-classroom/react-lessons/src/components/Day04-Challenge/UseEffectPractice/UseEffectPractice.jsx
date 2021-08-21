import React, { useState, useEffect } from 'react';

const UseEffectPractice = (props) => {
    const [animal, setanimal] = useState("alligator");
    const [isPredator, setisPredator] = useState(undefined);

    function handleClick() {
        setanimal("monkey")
    }

    useEffect(() => {
        switch (animal) {
            case "monkey":
                setisPredator(false);
                break;
            case "alligator":
                setisPredator(true);
                break;
            default: 
                setisPredator(undefined);
        }
        
        //This useEffect should only run when animal is changed
        //Use a switch to determine if the animal is a predator or not.

        //Example: Case is a Mokey you need to change the value of isPredator to flase... make a case for the alligator and hcange the value to isPredator to true
        //Default case should be undefined.
    },[animal]);

    return ( 
        <div>
           <p>The current animal is {animal} and isPredator is set to {" "}{isPredator?.toString() ?? "undefined"}</p>
           <button onClick={handleClick}>Click to Change Animal</button>
           {/*<button onClick={()=>setisPredator(!isPredator)}>Change if Predator</button>*/}
        </div>
     );
}
 
export default UseEffectPractice;