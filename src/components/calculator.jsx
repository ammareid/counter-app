import React, { Component } from "react";

class Calculator extends Component {
  state = { num1: 1, num2: 0 };

  handleInputChange = (event) => {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);

    // this.setState({ [id]: event.target.value });
    // console.log("event is: ", event);
  };

  handleClick = () => {
    console.log(
      "Button Click: num1: " + this.state.num1 + ", num2: " + this.state.num2
    );
  };
  render() {
    return (
      <React.Fragment>
        <input
          id="num1"
          type="text"
          value={this.state.num1}
          onChange={this.handleInputChange}
        />
        <input
          id="num2"
          type="text"
          value={this.state.num2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Do</button>
      </React.Fragment>
    );
  }
}

export default Calculator;
