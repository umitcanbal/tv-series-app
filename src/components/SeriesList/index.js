import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const SeriesListItem = (props) => {
  
  const { name, id } = props.singleListItem.show;
  
  return (
    <li className="list-items">
      <Link to={`/series/${id}`}>
        {name}
      </Link>
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