import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const bottomLeft = {
  top: "20px",
  left: 0
};

const bottomRight = {
  top: "20px",
  left: "-180px"
};

class App extends Component {
  state = { Position: "BottomRight" };
  render() {
    return (
      <div className="app">
        <div style={{ margin: "0 0 300px 0" }}>
          <select onChange={this.handleChange}>
            <option value="BottomRight">Bottom Right</option>
            <option value="BottomLeft">Bottom Left</option>
            <option value="TopLeft">Top Left</option>
            <option value="TopRight">Top Right</option>
          </select>
        </div>

        <DragR>
          <PositionR Position={this.state.Position}>
            <div className="button" />
            <div style={bottomRight} className="dropdown" />
          </PositionR>
        </DragR>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ Position: e.target.value });
  };
}

class PositionR extends Component {
  constructor(props) {
    super(props);
    this.One = React.Children.toArray(props.children)[0];
    this.Two = React.Children.toArray(props.children)[1];
  }

  componentDidMount() {
    const style = this.buildInitialPosition();

    this.drop.style.top = style.top;
    this.drop.style.left = style.left;
  }

  componentDidUpdate() {
    const style = this.buildInitialPosition();

    this.drop.style.top = style.top;
    this.drop.style.left = style.left;
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "inline"
          }}
          ref={e => (this.button = e)}
        >
          {this.One}
        </div>
        <div
          style={{ lineHeight: 0, position: "absolute" }}
          ref={e => (this.drop = e)}
        >
          {this.Two}
        </div>
      </div>
    );
  }

  buildInitialPosition() {
    const calcBounding = this.drop.getBoundingClientRect();
    const button = this.button.getBoundingClientRect();

    if (this.props.Position === "BottomLeft") {
      return {
        top: button.height + "px",
        left: "0"
      };
    } else if (this.props.Position === "BottomRight") {
      return {
        top: button.height + "px",
        left: button.width - calcBounding.width + "px"
      };
    } else if (this.props.Position === "TopLeft") {
      return {
        top: -calcBounding.height + "px",
        left: "0"
      };
    } else if (this.props.Position === "TopRight") {
      return {
        top: -calcBounding.height + "px",
        left: button.width - calcBounding.width + "px"
      };
    }
  }
}

class DragR extends Component {
  // 2 children the first is the position the 2nd etc
  render() {
    return <div draggable>{this.props.children}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
