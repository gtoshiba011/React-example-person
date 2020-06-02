import React, { useEffect } from "react";
import cockpitCss from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit] 1st useEffect []");
    // Http request...
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud...");
    // }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit] clean up work in 1st useEffect []");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit] 2nd useEffect [props.personsLength]");

    return () => {
      console.log("[Cockpit] clean up work in 2nd useEffect [props.persons]");
    };
  }, [props.personsLength]);

  useEffect(() => {
    console.log("[Cockpit] 3rd useEffect <empty>");
    return () => {
      console.log("[Cockpit] clean up work in 3rd useEffect <empty>");
    };
  });

  let classes = [];
  // method 3: CSS module
  let btnClass = "";
  // let btnClass = [appCss.Button];
  if (props.showPersons) {
    btnClass = cockpitCss.Red;
    // btnClass.push(appCss.Red);// method 3: CSS module
  }

  if (props.personsLength <= 2) {
    classes.push(cockpitCss.red);
  }
  if (props.personsLength <= 1) {
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

// export default Cockpit;
export default React.memo(Cockpit);
