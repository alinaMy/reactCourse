import React, { Component } from 'react';
import Person from './Person/Person1';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Alina', age: 36},
      {name: 'Eugene', age: 37},
      {name: 'Jonathan', age: 3}
    ]
}

switchNameHandler = () =>{
    console.log('was clicked')
}
  render() {
    return (
      <div className="App">
        <h1> Let's do React</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobbie: comps</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
