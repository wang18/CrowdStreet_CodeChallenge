import React, { Component } from 'react';
import './App.css';
import TableContainer from './components/component_table_container';
import ControlPanel from './components/component_controlPanel';
import {connect} from 'react-redux';
import {initSetting } from './utils/InitialSetting';

class App extends Component {
    componentWillMount(){
        if(localStorage.getItem('tables')==null){
            initSetting();
        }
    }
  render() {
    return (
      <div className="App">
          <TableContainer />
        {this.props.showPanel ? <ControlPanel /> : ''}
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        showPanel: state.ConfigurePanel.panelShow
    };
}
export default connect(mapStateToProps,null)(App);
