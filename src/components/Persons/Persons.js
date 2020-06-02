import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons] shouldComponentUpdate");
    // props here are Array, i.e., an Object
    // so compare pointer here...
    return nextProps.persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons] componentDidUpdate", snapshot.message);
  }

  componentWillUnmount() {
    console.log("[Persons] componentWillUnmount");
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
