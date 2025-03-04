import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor] = useState('white');
    const [ backgroundColor, setBackgroundColor] = useState('purple');
    const [ borderRadius, setBorderRadius] = useState('5px');
    const [ borderStyle, setBorderStyle] = useState('dashed');
    const [ display, setDisplay] = useState('inline-block');
    const [ width, setWidth] = useState('350px');
    const [ textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign,
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    };

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    };
    
    const toggleDisplay = () => {
        display === 'inline-block' ? setDisplay('flow-root') : setDisplay('inline-block');
    };

    const toggleWidth = () => {
        width === '350px' ? setWidth('500px') : setWidth('350px');
    };

    const toggleTextAlign = () => {
        textAlign === 'center' ? setTextAlign('justify') : setTextAlign('center');
    };

    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="Change font color" function={toggleColor} selectedStyle={color}/>
                <FunctionalComponent string="Change background color" function={toggleBackgroundColor} selectedStyle={backgroundColor}/>
                <FunctionalComponent string="Change border radius" function={toggleBorderRadius} selectedStyle={borderRadius}/>
                <FunctionalComponent string="Change border style" function={toggleBorderStyle} selectedStyle={borderStyle}/>
                <FunctionalComponent string="Change the display" function={toggleDisplay} selectedStyle={display}/>
                <FunctionalComponent string="Change the width" function={toggleWidth} selectedStyle={width}/>
                <FunctionalComponent string="Change the text alignment" function={toggleTextAlign} selectedStyle={textAlign}/>
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: ()=> console.log('Can i see this in my dev tools?'),
    selectedStyle: 'what style??'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle : PropTypes.string.isRequired
}