import React, {Component} from 'react';
import Sections from './sections/';
import './App.css';
import 'circular-std';

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
