import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate() {
    console.log("[Persons] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons] componentDidUpdate", snapshot.message);
  }

  render() {
    console.log("[Persons] render");
    const { persons, doDeletePerson, doNameChanged } = this.props;
    return persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => doDeletePerson(index)}
          changed={(event) => doNameChanged(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
