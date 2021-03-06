import React, { Component } from "react";
import personCss from "./Person.css";

// method 2: styled-components
// import styled from "styled-components";
// StyledDiv is a React Component
// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) : {
//     width: 450px;
//   }
// `;

class Person extends Component {
  render() {
    // section 6: React debug
    // const rnd = Math.random();
    // if (rnd > 0.99) {
    //   throw new Error("Something went wrong");
    // }

    console.log("[Person] render");

    // method 3: CSS module
    return (
      // <div className={personCss.Person}>
      // </div>
      <React.Fragment className={personCss.Person}>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
        </React.Fragment>
    );

    // method 2: styled-components
    // return (
    //   <StyledDiv>
    //     <p onClick={props.clicked}>
    //       I'm {props.name} and I am {props.age} years old!
    //     </p>
    //     <p>{props.children}</p>
    //     <input type="text" onChange={props.changed} defaultValue={props.name} />
    //   </StyledDiv>
    // );

    // method 1: Radium
    // const style = {
    //   "@media (min-width: 500px)": {
    //     width: "450px",
    //   },
    // };
    // return (
    //   <div className="Person" style={style}>
    //     <p onClick={props.clicked}>
    //       I'm {props.name} and I am {props.age} years old!
    //     </p>
    //     <p>{props.children}</p>
    //     <input type="text" onChange={props.changed} defaultValue={props.name} />
    //   </div>
    // );
  }
}

export default Person;
