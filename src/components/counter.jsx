import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.start,
    tags: [],
    tags1: ["tag1", "tag2", "tag3"],
  };

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

  handleIncrement = (incr) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let counterCssClasses = "badge m-2 ";
    counterCssClasses += this.state.count === 0 ? "bg-warning" : "bg-primary";

    return (
      <React.Fragment>
        <div>
          <span className={counterCssClasses}>{this.formatCount()}</span>
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
        </div>
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
