import React from 'react';
import { Link } from 'react-router';
// import StationsContainer from '../containers/StationsContainer';


export default function (props) {
  const stations = props.stations;
  console.log("these are the sations","\n",stations)

	return (
		<div>
		  <h3>Stations</h3>
		
		  <div className="list-group">
		  {
		    Object.keys(stations).map(genre => {
		      return (
		        <div className="list-group-item" key={genre}>
		          <Link to={`/stations/${genre}`}>{genre}</Link>
		        </div>
		      );
		    })
		  }
		  </div>
		</div>
	)
}
