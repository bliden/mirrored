import React, { Component } from "react";
import { PropTypes } from "prop-types";

export class Mirror extends Component {
  mirrorStyle = () => ({
    transform:
      this.props.rotate === "Y" ? "rotateY(0.5turn)" : "rotateX(0.5turn)"
  });

  render() {
    return (
      <div className="mirror" style={this.mirrorStyle()}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Mirror.propTypes = {
  rotate: PropTypes.string,
  text: PropTypes.string
};

export default Mirror;
