import React from "react";

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
    
    setTimeout( () => this.props.calculateLength(this.state.series), 1000 );

  }

  render() {
    
    return(
      <div>
        Series Container
      </div>
    )
  }
}

export default Series;