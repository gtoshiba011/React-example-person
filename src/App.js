import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    // update person's name and the array
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    // method 1: create a pointer
    // persons is a pointer of state.persons
    // do not modified it directly (i.e., you will not want to modify state.persons)
    // const persons = this.state.persons;

    // method 2: create a copy
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = this.state.showPersons ? (
      <div>
        {this.state.persons.map((person, index) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        ))}
      </div>
    ) : null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!!")}
        >
          Switch Name
        </button>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
