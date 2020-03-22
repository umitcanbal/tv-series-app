import React from "react";

export default class SingleSeries extends React.Component {

  render() {
    console.log(this.props);

    return(
      <div>Girilen filmin id'si {this.props.match.params.id}</div>
    )
  }
}

// Buradaki this.props objesini iyi incele. 
// Şu an Main'de belirttiğim path'i browsera elimle yazınca, bu komponenti renderlayabiliyorum ve browserda görüntüleyebiliyorum.