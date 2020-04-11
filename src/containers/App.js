import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cookpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxi from '../hoc/Auxi';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: '1', name:'max', age:28},
      {id: '2', name:'manu', age:29},
      {id: '3', name:'julia', age:26}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //no se usa mas
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextstate){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props)=>{
      return {persons: persons, 
        //hacer esto cuando necesitamos un dato del estado actual
      changeCounter: prevState.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({showPersons: !show  });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons){
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
          />;
    }
 
    return (
      //<div className={classes.App}>
      //<WithClass classes={classes.App}>
      <Auxi>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
        value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler
          }}>
        {this.state.showCockpit ? (
          <Cookpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
        </AuthContext.Provider>
      </Auxi>
      //</WithClass>
      //</div>
    );
  }
}

export default withClass(App, classes.App);