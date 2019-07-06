import React, { Component } from "react";
import "./App.css";

class Cell extends Component {
  render() {
    return <div className="cell">{this.props.number}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell number={3} />
          <Cell number={2} />
          <Cell number={3} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
        </div>
      </div>
    );
  }
}

export default App;
