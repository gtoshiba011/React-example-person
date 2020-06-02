import React from "react";
import Person from "./Person/Person";

const Persons = ({ persons, doDeletePerson, doNameChanged }) => {
  return persons.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      clicked={() => doDeletePerson(index)}
      changed={(event) => doNameChanged(event, person.id)}
    />
  ));
};

export default Persons;
