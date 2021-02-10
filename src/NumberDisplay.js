import React, { Component } from 'react';
import './Display.scss'
const NumberDisplay = (props) => {
    return (
        <div id='display'>
            <p id="fullString">{props.fullString}</p>
            <p>{props.mathOpString}</p>
        </div>
    )
}
export default NumberDisplay;