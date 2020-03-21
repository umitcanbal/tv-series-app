import React from "react";
import "./index.css";

const SeriesList = (props) => {

  return (

    <ul>
      {props.list.map( (singleListItem) => 
      {
        const {id, name} = singleListItem.show;
        return (
        <li key={id}>{name}</li>
        )
      } 
      )}
    </ul>
  )
}

export default SeriesList;