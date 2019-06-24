import React from "react";

import Mirror from "./components/Mirror";
import Controls from "./components/Controls";

class App extends React.Component {
  state = {
    text: ""
  };

  updateText = text => {
    this.setState({
      text
    });
  };

  render() {
    return (
      <React.Fragment>
        <Mirror text={this.state.text} rotate="X" />
        <Controls text={this.state.text} updateText={this.updateText} />
        <Mirror text={this.state.text} rotate="Y" />
      </React.Fragment>
    );
  }
}

export default App;
