// import and mount this component in the App.jsx 
// Create a button that will conduct the fetch of ... 
// Console log the characters
// See if you can store the characters into a useState variable
import React, {useState} from "react";
import {
    CardColumns,
  } from 'reactstrap';
import MortyChild from "./MortyChild";

const MortyParent = (props) => {
    const url = "https://rickandmortyapi.com/api/character";
    const [character, setcharacter] = useState([]);
    
    const fetchURL = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setcharacter(data.results)
    };
    
    const handleClick = () => {
        fetchURL();
    };
    
    const displayCards = () => character.map((char) => <MortyChild key={char.id} char={char}/>);

    return ( 
        <div>
            <button onClick={handleClick}>Click Button</button>
            <CardColumns>{displayCards()}</CardColumns>
        </div>
     );
}
 
export default MortyParent;