import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

const app = (props) => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name:'max', age:28},
        {name:'manu', age:29},
        {name:'julia', age:26}
      ]  
    }
  );

  const [indexState, setIndexState] = useState(0);

  const hacerHandler = () => {
    if (indexState === 0){
      setIndexState(1);
    } else if (indexState === 1){
      setIndexState(2);
    } else {
      setIndexState(0);
    }
  };

  return (
    <div className="App">
      <h1>Hi, im a react app</h1>
      <p>This is really working</p>
      <button onClick={hacerHandler}>Switch Name</button>
      <Person name={personsState.persons[indexState].name} age={personsState.persons[indexState].age}/>
    </div>
  );
}

export default app;


