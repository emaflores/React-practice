import React, { Component } from 'react';
import classes from './Person.module.css'

//const person = (props) => {
class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Hi im a {this.props.name}! and im {this.props.age} years old {}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
    
    
        );
    }

};

export default Person;