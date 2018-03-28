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

switchNameHandler = (newName) =>{
    //console.log('was clicked')
  this.setState({
    persons: [
      {name: newName, age: 36},
      {name: 'Eugene Myunster', age: 37},
      {name: 'Jonathan Myunster', age: 3}
    ]
  })
}
  render() {
    return (
      <div className="App">
        <h1> Let's do React</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Alina Myunster')}>Switch name</button>
        <Person name = {this.state.persons[0].name}
                age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name}
                age = {this.state.persons[1].age}
                click = {this.switchNameHandler.bind(this, 'Alina Kataeva')}>My hobbie: comps</Person>
        <Person name = {this.state.persons[2].name}
                age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
