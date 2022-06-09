import React, { Component } from "react";

const COUNTER_NORMAL_CSS_CLASSES = "badge m-2 bg-primary";
const COUNTER_WARNING_CSS_CLASSES = "badge m-2 bg-warning";

class Counter extends Component {
  state = {
    value: this.props.start,
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
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let counterCssClasses =
      this.state.value === 0
        ? COUNTER_WARNING_CSS_CLASSES
        : COUNTER_NORMAL_CSS_CLASSES;

    return (
      <React.Fragment>
        <div>
          {/* <h1>#{this.props.id}</h1> */}
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
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
Counter.defaultProps = {
  start: 0,
};

export default Counter;
