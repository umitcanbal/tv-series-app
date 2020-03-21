import React from "react";
import "./index.css";


const SeriesListItem = (props) => {
  
  const { name } = props.singleListItem.show;

  return (
    <li className="list-items">
      { name }
    </li>
  )
}

const SeriesList = (props) => {
  
  return (
    <ul>
      {props.list.map( (singleListItem) => 
      {
        const { id } = singleListItem.show;
        
        return (
          <SeriesListItem singleListItem={singleListItem} key={id}/>
        )
      } 
      )}
    </ul>
  )
}

export default SeriesList;