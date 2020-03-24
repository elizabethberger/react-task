import React, { Component } from 'react';
import './userInput.css';

const UserInput  = (props )=> {
    return (
    <div>
        <p onClick={props.click}> Yesss you are {props.name} !</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default UserInput;