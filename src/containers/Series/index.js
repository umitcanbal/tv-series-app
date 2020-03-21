import React from "react";

import SeriesList from "../../components/SeriesList";

class Series extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      inputFieldValue: "",
      isFetching: false,
    }
  }

  onSeriesInputChange = (event) => {
    this.setState( { inputFieldValue: event.target.value, isFetching: true } )
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then( (response) => { return( response.json()) })
      .then ( (series) => { this.setState( {
        series: series,
        isFetching: false,
      } ) })
  }

  render() {

    return(
      <div>
        <div>
          <input 
            type="text"
            value={this.state.inputFieldValue}
            onChange={this.onSeriesInputChange}
          />
        </div>
        {
          this.state.inputFieldValue === "" 
          &&
          <p>İzlemek istediğiniz filmin adını yukarıdaki kutucuğa yazınız.</p>
        }
        {
          this.state.inputFieldValue !== "" && this.state.series.length === 0 
          &&
          <p>Aradığınız isimde bir film yok, ismi değiştirip tekrar deneyiniz</p>
        }
        {
          this.state.inputFieldValue !== "" && this.state.isFetching 
          &&
          <p>Loading......!!!!</p>
        }
        {
          this.state.inputFieldValue !== "" && !this.state.isFetching 
          &&
          <SeriesList list={this.state.series} />
        }
      </div>
    )
  }
}

export default Series;