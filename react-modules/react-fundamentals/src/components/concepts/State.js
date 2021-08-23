import React, {useState} from 'react';

const State = () => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class components have a seperate means of using and changing state.</dd>
                    <dt>UseState Uses Array Destructuring</dt>
                    <dd>useState proves a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>Triggers re-Renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
            </div>
            <StateExample />
        </div>
     );
}

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [colorchange, setcolorchange] = useState('blue');


    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <p style={{color: colorchange}} onMouseEnter={e => setcolorchange('red')} onMouseLeave={e => setcolorchange('blue')}>Just to show text changing color</p>
            <br />
            <img style={{width: '100px', height: '100px'}} alt="this is something"
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" onClick={e => setLikeNum(likeNum + 1)}/>
            <span>{likeNum}</span>
        </div>
    )
}
 
export default State;