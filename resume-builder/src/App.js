import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import resume_json from './data/trimblet.json';

const { Map } = require('immutable');

const { Header } = require('./components/header.react');
const { Experience } = require('./components/experience.react');

class App extends Component {

  render() {
    const resume = Map(resume_json);
    return (
      <div className="App">
        <Header info={resume.get("info")} />
        <Experience entries={resume.get("experience")} />
        <Experience entries={resume.get("education")} />
      </div>
    );
  }
}

export default App;
