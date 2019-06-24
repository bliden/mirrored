import React, { Component } from "react";

export class Controls extends Component {
  handleChange = e => {
    return this.props.updateText(e.target.value);
  };
  render() {
    return (
      <div className="controls">
        <label>
          words:
          <input
            type="text"
            name="text"
            value={this.props.text}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Controls;
