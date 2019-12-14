import React, {Component} from 'react';
import Now from './sections/Now';
import School from './sections/School';
import Hello from './sections/Hello';
import Personal from './sections/Personal';
import Experience from './sections/Experience';
import './App.css';
import "circular-std";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello bgColour="#FEFFF1" contentColour="#000000"/>
        <School bgColour="#FEFFF1" contentColour="#000000"/>
        <Experience bgColour="#FEFFF1" contentColour="#000000"/>
        <Personal bgColour="#FEFFF1" contentColour="#000000"/>
        <Now bgColour="#FEFFF1" contentColour="#000000"/>
      </div>
    );
  }
}

export default App;
