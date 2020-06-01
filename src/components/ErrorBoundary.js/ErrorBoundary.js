import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasEror: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    return this.state.hasEror ? (
      <h1>{this.state.errorMessage}</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
