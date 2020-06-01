import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";
// import Radium, { StyleRoot } from "radium";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt === "true" ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt === "true" ? "salmon" : "lightgreen")};
    color: black;
  }
`;

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
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
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    // using styled-components
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons.toString()}
          onClick={this.togglePersonsHandler}
        >
          Show Persons
        </StyledButton>
        {persons}
      </div>
    );

    // using Radium: wrap by <StyleRoot> when return in App
    // return (
    //   <StyleRoot>
    //     <div className="App">
    //       <h1>Hi, I'm a React App</h1>
    //       <p className={classes.join(" ")}>This is really working!</p>
    //       <button style={style} onClick={this.togglePersonsHandler}>
    //         Show Persons
    //       </button>
    //       {persons}
    //     </div>
    //   </StyleRoot>
    // );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// export default Radium(App);
