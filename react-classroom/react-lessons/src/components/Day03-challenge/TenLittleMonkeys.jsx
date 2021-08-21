/*
1. Create a Functional Component called TenLittleMonkeys
2. Use useState to set the initial Monkey Count to 10
3. Display how many monkeys are left in a sentece that says the following... 
10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
4. Once the count gets to zero display "All the Monkeys fell off"
5. Button clicking should take 1 away from the total monkey c
*/
import React, {useState} from 'react';

const TenLittleMonkeys = () => {
    const [monkey, setMonkey] = useState(10)
    const [isDisabled, setisDisabled] = useState(false);
 
     function clickFunction(e){
         setMonkey(monkey - 1)
         if(monkey-1 == 0){
             setisDisabled(true);
         }
        console.log(monkey)
    }
    
    return ( 
        <div>
        <p>{monkey} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said, no more mokeys jumping on the bed!</p>
        {monkey <1 ? <p>All the monkeys fell off!</p> : <button onClick={clickFunction}>CLICK</button>}
        {/* {monkey > 0 ? <button onClick={clickFunction}>CLICK</button> : null} */}
        </div>
     );
}
 
export default TenLittleMonkeys;