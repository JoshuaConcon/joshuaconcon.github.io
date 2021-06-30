import React, {Component} from 'react';
import Sections from './sections/';
import "@vetixy/circular-std";
import './App.css';

/**
 * Main App Component
 */
class App extends Component {
  /**
   * Render function for Main App
   * @return {*} Website HTML
   */
  render() {
    return (
      <div className="App">
        <Sections />
      </div>
    );
  }
}

export default App;
