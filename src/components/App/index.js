import React, { Component } from 'react';
import './App.css';
import Intro from "../Intro"
import Series from "../../containers/Series"

class App extends Component {

  state = {
    series: [],
  }
 
  componentDidMount = () => {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then( (responsee) => { return (responsee.json()) } )
      .then( myJson => this.setState( { series: myJson } ) ); 
    
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
          The length of series array - {this.state.series.length}
          <Series />
      </div>
    );
  }
}

export default App;
