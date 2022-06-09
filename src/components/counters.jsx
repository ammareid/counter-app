import React, { Component, Fragment } from "react";
import Calculator from "./calculator";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, start: 0 }],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((c) => (
          <Counter key={c.id} start={c.start} id={c.id} />
        ))}
        <Counter start={0} />
        <Counter start={1} />
        <Counter />
        <Counter />
        <Calculator />
      </React.Fragment>
    );
  }
}

export default Counters;
