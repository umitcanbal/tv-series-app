import React from "react";

export default class SingleSeries extends React.Component {

  render() {
    console.log(this.props);

    return(
      <div>Girilen filmin id'si {this.props.match.params.id}</div>
    )
  }
}
