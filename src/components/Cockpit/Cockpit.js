import React from "react";
import cockpitCss from "./Cockpit.css";

const Cockpit = (props) => {
  let classes = [];
  // method 3: CSS module
  let btnClass = "";
  // let btnClass = [appCss.Button];
  if (props.showPersons) {
    btnClass = cockpitCss.Red;
    // btnClass.push(appCss.Red);// method 3: CSS module
  }

  if (props.persons.length <= 2) {
    classes.push(cockpitCss.red);
  }
  if (props.persons.length <= 1) {
    classes.push(cockpitCss.bold);
  }
  return (
    <div className={cockpitCss.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.doTogglePerson}>
        Show Persons
      </button>
    </div>
  );
};

export default Cockpit;
