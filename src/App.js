import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      a: '',
      b: '',
    }
    this.refA = React.createRef();
    this.refB = React.createRef();
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      a: this.refA.current.input.current.value,
      b: this.refB.current.input.current.value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Mirrored 
            text={this.state.a}
            rotate="X"
          />
        <div className="controls">
          <Input 
            ref={this.refA}
            type="text"
            update={this.update}
          />
          <Input 
            ref={this.refB}
            type="text"
            update={this.update}
          />
        </div>
        <Mirrored 
          text={this.state.b}
          rotate="Y"
        />
      </React.Fragment>
    )
  }
}

class Input extends React.Component {
  constructor(props){
    super(props);
    this.input = React.createRef();
  }
  render(){
    return (
      <input 
        ref={this.input} 
        type="text" 
        onChange={this.props.update} 
        placeholder="please type here"
      />
    )
  }
}

function Mirrored(props){
  return (
    <h1
      className="mirrored"
      style={{
        transform: `rotate${props.rotate}(0.5turn)`,
      }}
    >
      {props.text}
    </h1>
  )
}


export default App;