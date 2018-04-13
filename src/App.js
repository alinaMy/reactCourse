import React, { Component } from 'react';
import Person from './Person/Person1';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'da1', name: 'Alina', age: 36},
      {id: 'da2', name: 'Eugene', age: 37},
      {id: 'da3', name: 'Jonathan', age: 3}
    ],
    showPersons: false
}

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
}

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person ={...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      coursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangeHandler(event, person.id)}
          />
        })}
      </div>
      )

    }
    return (
      <div className="App">
        <h1> Let's do React</h1>
        <button
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle name</button>
        {persons}
      </div>
    );
  }
}

export default App;
