import React, { Component } from 'react';
import './App.css';
import TableContainer from './components/component_table_container';
import ControlPanel from './components/component_controlPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableContainer />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
