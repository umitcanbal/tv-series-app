import React, { Component } from 'react';
import './App.css';
import Intro from "../Intro"

class App extends Component {

  state = {
    series: [],
  }
 
  componentDidMount = () => {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then( (responsee) => { return (responsee.json()) } )
      .then( myJson => this.setState( { series: myJson } ) ); 
    
  }
  
  // componentDidMount = async () => {
  //   const url = new URL ("http://api.tvmaze.com/search/shows?q=Vikings");
  //   console.log("url", url);
  //   const response = await fetch(url);
  //   console.log("response", response);
  //   const json = await response.json();
  //   console.log("json", json);
  //   this.setState( { series: json } )
  // }

  //Yukarıdaki fetching için ikinci bi seçenek

  render() {
    console.log(this.state.series);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
