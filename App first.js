import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    i: 0,
    persons: [
      {name:'max', age:28},
      {name:'manu', age:29},
      {name:'julia', age:26}
    ]  
  }

  hacerHandler = () => {
    if (this.state.i === 0){
      this.setState({i: 1});
    } else if (this.state.i === 1){
      this.setState({i: 2});
    } else {
      this.setState({i: 0});
    }
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name:'julia', age:26}
      ]  
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <p>This is really working</p>
        <button onClick={this.hacerHandler}>Switch Name</button>
        <Person name={this.state.persons[this.state.i].name} age={this.state.persons[this.state.i].age}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={this.hacerHandler}>
          My hobby es nadar 
        </Person>
        <button 
        style={style}
        onClick={() => this.cambiarNombreHandler('Maximilian')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
        click={this.cambiarNombreHandler.bind(this, 'Max!')} 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        change={this.nameChangeHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>

    );
  }
}

export default App;