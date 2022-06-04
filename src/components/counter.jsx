import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.start,
  };

  render() {
    let counterCssClasses = "badge m-2 ";
    counterCssClasses += this.state.count === 0 ? "bg-warning" : "bg-primary";
    return (
      <React.Fragment>
        <span className={counterCssClasses}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
