import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className="Person">
        <p onClick={props.click}>Hi im a {props.name}! and im {props.age} years old {}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
);
};

export default person;