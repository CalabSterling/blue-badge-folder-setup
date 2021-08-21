import React, {useState, useEffect} from "react";

const ChuckFetch = (props) => {
    const url = "https://api.chucknorris.io/jokes/random";
    const [joke, setjoke] = useState("");
    const fetchURL = async (props) => {
        const response = await fetch(url);
        const data = await response.json();

        setjoke(data.value);
    }

    useEffect(() => {
        fetchURL();
    }, []);
    
    const handleClick = () => {
        fetchURL();
    }
    
    return ( 
        <div>
            <p>{joke}</p>
            <button onClick={handleClick}>click for Joke</button>
        </div>
     );
}
 
export default ChuckFetch;