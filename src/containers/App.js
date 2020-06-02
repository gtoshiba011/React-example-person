import React, { Component } from "react";
import appCss from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// method 1: Radium
// import Radium, { StyleRoot } from "radium";

// method 2: styled-components
// import styled from "styled-components";
// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt === "true" ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) =>
//       props.alt === "true" ? "salmon" : "lightgreen"};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // ### rare used ###
  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps", props);
    return state;
  }

  // ### seldom used ###
  // componentWillMount() {
  //   console.log("[App] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

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
    console.log("[App] render");

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          doDeletePerson={this.deletePersonHandler}
          doNameChanged={this.nameChangedHandler}
        />
      );

      // method 1: Radium
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
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }

    return (
      <div className={appCss.App}>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          doTogglePerson={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

    // method 1 & 2
    // if (this.state.persons.length <= 2) {
    //   classes.push("red");
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push("bold");
    // }

    // method 2: styled-components
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p className={classes.join(" ")}>This is really working!</p>
    //     <StyledButton
    //       alt={this.state.showPersons.toString()}
    //       onClick={this.togglePersonsHandler}
    //     >
    //       Show Persons
    //     </StyledButton>
    //     {persons}
    //   </div>
    // );

    // method 1: Radium
    // wrap by <StyleRoot> when return in App
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
// method 1: Radium
// export default Radium(App);
