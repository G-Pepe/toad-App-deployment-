import React from "react";

export class List extends React.Component {
  changeColor = () => {
    if (this.props.number >= 0 && this.props.number <= 2) {
      return "navy";
    } else if (this.props.number >= 3 && this.props.number <= 5) {
      return "lightskyblue";
    } else if (this.props.number >= 5 && this.props.number <= 7) {
      return "yellow";
    } else if (this.props.number >= 8 && this.props.number <= 9) {
      return "crimson";
    } else if (this.props.number >= 10) {
      return "red";
    }
  };

  textDeleted = () => {
    return "line-through";
  };

  changeStatus = () => {
    return "none";
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: this.changeColor(),
          width: "25%",
          borderRadius: "10px",
          margin: "5px",
        }}
      >
        <li
          style={{
            color: "black",
            backgroundColor: this.changeColor(),
            textDecoration: this.textDeleted(),
            /* display: this.changeStatus(), */
          }}
          className="activity"
        >
          {this.props.text}
        </li>

        <button onClick={this.textDeleted} className="checked">
          &#10003;
        </button>
        <button onClick={this.changeStatus} className="checked">
          &#10008;
        </button>
      </div>
    );
  }
}
