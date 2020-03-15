import React, { Component } from 'react';
import './App.css';
import Intro from "../Intro"


class App extends Component {

  state = {
    series: [],
  }
 
  componentDidMount() {
    const series = ["Vikings", "Game of Thrones"];

    setTimeout( () => {
      this.setState( {
        series: series
        // böyle olunca property/key olan "series"i variable olan "series"e eşitliyo direkt, isimler aynı olduğu için
      } );
    }, 
    2000);
  }

  render() {
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
