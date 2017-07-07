import React, { Component } from 'react';
import './App.css';
import Namelist  from './components/Namelist/index.js';


class App extends Component {

  
  
  render() {
    return (
      <div>
        <Namelist data={this.props.data} />
      </div>  
    )
  }
}

export default App;
