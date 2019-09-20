import React, { Component } from 'react';
import Now from './sections/Now';
import Scotiabank from './sections/Scotiabank';
import Altice from './sections/Altice';
import School from './sections/School';
import Hello from './sections/Hello';
import Personal from './sections/Personal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello bgColour="#291C7B" contentColour="#E6FFC5"/>
        <School bgColour="#E6FFC5" contentColour="#291C7B"/>
        <Altice bgColour="#291C7B" contentColour="#E8AA3C"/>
        <Scotiabank bgColour="#FF4F6A" contentColour="#291C7B"/>
        <Personal bgColour="#E8AA3C" contentColour="#291C7B"/>
        <Now bgColour="#291C7B" contentColour="#FF4F6A"/>
      </div>
    );
  }
}

export default App;
