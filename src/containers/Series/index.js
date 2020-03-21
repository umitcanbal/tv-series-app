import React from "react";

import SeriesList from "../../components/SeriesList";

class Series extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
    }
  }

  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then( (response) => { return( response.json()) })
      .then ( (series) => { this.setState( {
        series: series,
      } ) })
  }

  doo = () => {
    console.log("bi tuşa tıkladın")
  }

  render() {
    return(
      <div>
        The length of series array - {this.state.series.length}
        <SeriesList list={this.state.series} />
        <input onChange={this.doo}/>
      </div>
    )
  }
}

export default Series;