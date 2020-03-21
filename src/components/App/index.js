import React, { Component } from 'react';
import './App.css';
import Intro from "../Intro"
import Series from "../../containers/Series"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      series: []
    }
  }

  calculateLength = (array) => {
    console.log("fonksiyonun adıı calculateLeeength", array);
    this.setState( {
      series: array,
    } );
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
          The length of series array - {this.state.series.length}
          
          <Series calculateLength={this.calculateLength} />
      </div>
    );
  }
}

export default App;
