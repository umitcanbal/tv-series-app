import React from "react";

import SeriesList from "../../components/SeriesList";

class Series extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
    }
  }

  onSeriesInputChange = (event) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then( (response) => { return( response.json()) })
      .then ( (series) => { this.setState( {
        series: series,
      } ) })
  }

  render() {
    return(
      <div>
        The length of series array - {this.state.series.length}
        <SeriesList list={this.state.series} />
        <input onChange={this.onSeriesInputChange}/>
      </div>
    )
  }
}

export default Series;