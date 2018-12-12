import React, { Component } from 'react';

import './App.css';

const { Header } = require('./components/header.react');
const { Experience } = require('./components/experience.react');

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header info={this.props.resume.get("info")} />
        <Experience entries={this.props.resume.get("experience")} />
        <Experience entries={this.props.resume.get("education")} />
      </div>
    );
  }
}

export default App;
