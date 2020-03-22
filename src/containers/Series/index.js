import React from "react";

import Intro from "../../components/Intro";

import SeriesList from "../../components/SeriesList";
import MySpinner from "../../components/Spinner";

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
    const { inputFieldValue, isFetching, series } = this.state;

    return(
      <div>
        <Intro message="Here you can find all of your most loved series"/>
        <div>
          <input 
            type="text"
            value={inputFieldValue}
            onChange={this.onSeriesInputChange}
          />
        </div>
        {
          inputFieldValue === "" && !isFetching
          &&
          <p>İzlemek istediğiniz filmin adını yukarıdaki kutucuğa yazınız.</p>
        }
        {
          inputFieldValue !== "" && series.length === 0 && !isFetching
          &&
          <p>Aradığınız isimde bir film yok, ismi değiştirip tekrar deneyiniz</p>
        }
        {
          inputFieldValue !== "" && isFetching 
          &&
          <MySpinner />
        }
        {
          inputFieldValue !== "" && !isFetching 
          &&
          <SeriesList list={series} />
        }
      </div>
    )
  }
}

export default Series;