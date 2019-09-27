import React, { Component } from 'react';
import './App.css';
import Details from './components/Details';

class App extends Component {
  state = {
    // isClicked: true,
    show: false,
  }

  // toggle = () => {
  //   this.setState({ isClicked: !this.state.isClicked })
  // }

  handleClick = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
      {this.state.show ? (
        <Details details={['test1', 'test2', 'test3']}/>
      ) : (
        <p>The details are hidden</p>
      )}
      <button onClick={this.handleClick}>{this.state.show ? "Hide details" : "Show details"}</button>
      </div>
    )
  }
}

export default App;
