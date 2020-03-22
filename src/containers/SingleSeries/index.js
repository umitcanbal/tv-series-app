import React from "react";

import MySpinner from "../../components/Spinner";

export default class SingleSeries extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      singleSerie: null,
    }
  }

  componentDidMount() {
    fetch(`http://api.tvmaze.com/shows/${this.props.match.params.id}`)
      .then( (response) => {
        return(
          response.json()
        )
      } ) 
      .then( (json) => {
          this.setState({
            singleSerie: json
          })
      } ) 
  }

  render() {
    const { singleSerie } = this.state;
    console.log(singleSerie);
    return(
      <div>
        {
          singleSerie === null
          &&
          <MySpinner />
        }
        {
          singleSerie !== null
          &&
          <div>
            <p>Bu dizinin adı {singleSerie.name}</p>
            <p>Hangi dilde? {singleSerie.language}</p>
            <ul>
              Türü?
              { singleSerie.genres.map( (genre, index) => {
                return(
                  <li key={index}>{genre}</li>
                )
              } ) }
            </ul>
          </div>
        }
      </div>
      
    )
  }
}
