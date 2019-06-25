import React, { Component } from "react";
import axios from "axios";

export class Controls extends Component {
  loadText = () => {
    axios
      .get("https://api.punkapi.com/v2/beers/random")
      .then(response => {
        const beer = response.data[0];
        this.props.updateText(
          `${beer.name}. ${beer.tagline} ${beer.description}`
        );
      })
      .catch(err => console.error(err));
  };
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
        <button onClick={this.loadText} style={btnStyle}>
          Load Random
        </button>
      </div>
    );
  }
}

const btnStyle = {
  color: "white",
  padding: "5px 10px",
  backgroundColor: "var(--purple)",
  border: "1px solid var(--dark-blue)",
  cursor: "pointer",

  marginLeft: "0.5rem"
};

export default Controls;
