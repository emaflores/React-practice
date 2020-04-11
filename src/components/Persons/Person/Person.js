import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css'
import Auxi from '../../../hoc/Auxi';
import withClass from '../../../hoc/withClass';

import AuthContext from '../../../context/auth-context';

//const person = (props) => {
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
          // <div className={classes.Person}>
          <Auxi>
            {/* <AuthContext.Consumer>
                    {(context) => 
                    context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}

            {this.context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in</p>
            )}
            <p onClick={this.props.click}>
              Hi im a {this.props.name}! and im {this.props.age} years old {}
            </p>
            <p>{this.props.children}</p>
            <input
              //ref={(inputEl) => {this.inputElement = inputEl}}
              ref={this.inputElementRef}
              type="text"
              onChange={this.props.changed}
              value={this.props.name}
            ></input>
          </Auxi>
          //</div>
        );
    }

};

//proptypes
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);