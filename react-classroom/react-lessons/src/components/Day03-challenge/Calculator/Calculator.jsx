import React, {useState} from "react";

const Calculator = (props) => {
   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [total, setTotal] = useState(number1 + number2)

   function calculateTotal() {
        setTotal( +number1 + +number2);
   }

   
    return ( 
        <div>
            <input type="number" value={number1} onChange={e => setNumber1(e.target.value)}/>
            <input type="number" value={number2} onChange={e => setNumber2(e.target.value)}/>
            <button onClick={calculateTotal}>Add Numbers</button>
            <h2>{total}</h2>
        </div>
     );
}
 
export default Calculator;