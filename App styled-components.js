import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

class App extends Component {
  state = {
    persons: [
      {id: '1', name:'manu', age:29},
      {id: '2', name:'max', age:28},
      {id: '3', name:'julia', age:26}
    ],
    showPersons: false,
    showPersons_v2: false    
  }

  cambiarNombreHandler = (newName) => {
    
    this.setState({
        persons: [
          {name: newName, age:28},
          {name:'manu', age:29},
          {name:'julia', age:26}
        ]  
      }
    ) 
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
    this.setState({
      persons: persons
      // persons: [
      //   {name: 'Max', age:28},
      //   {name: event.target.value, age:29},
      //   {name:'julia', age:26}
      // ]  
    })
  }

  togglePersonsHandler = () => {
    this.state.showPersons ? 
    this.setState({showPersons: false  }) :
    this.setState({showPersons: true })
  }

  togglePersons_v2Handler = () => {
    const show = this.state.showPersons_v2;
    this.setState({showPersons_v2: !show  });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //nueva forma
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    // forma elegante
    let persons_v2 = null;
    if (this.state.showPersons_v2){
      persons_v2 = (
        <div>
          {/* en vez de escribir person 3 veces */}
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        click={this.cambiarNombreHandler.bind(this, 'Max!')} 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        change={this.nameChangeHandler}
        />
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> */}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length<=2){
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length<=1){
      classes.push('bold'); // classes = ['bold']
    }
    return (
        <div className="App">
          <h1>Hi, im a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          {/* <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {this.state.showPersons ?
            <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
            <Person 
            click={this.cambiarNombreHandler.bind(this, 'Max!')} 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangeHandler}
            />
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div> : null
          } */}
          {/* forma elegante */}
          <StyledButton 
          alt={this.state.showPersons_v2}
          onClick={this.togglePersons_v2Handler}>Toggle Persons_v2</StyledButton>
          {persons_v2}
        </div>
    );
  }
}

export default App;