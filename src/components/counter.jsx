import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.start,
    tags: [],
    tags1: ["tag1", "tag2", "tag3"],
    num1: 1,
    num2: 0,
  };
  // constructor() {
  //   super();
  //   this.handleChange = this.handleChange.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>no tags</p>;
    } else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  handleInputChange = (event, id) => {
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
    let counterCssClasses = "badge m-2 ";
    counterCssClasses += this.state.count === 0 ? "bg-warning" : "bg-primary";

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

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
Counter.defaultProps = {
  start: 0,
};

export default Counter;
