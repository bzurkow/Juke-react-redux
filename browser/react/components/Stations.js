import React from 'react';
import { Link } from 'react-router';
// import StationsContainer from '../containers/StationsContainer';


export default function (props) {
  const stations = props.stations;
  console.dir(props)

	return (
		<div>
		  <h3>Stations</h3>
		  <div className="list-group">
		  {
		    Object.keys(stations).map(station => {
		      return (
		        <div className="list-group-item" key={station}>
		          <Link to='/stations'>{station}</Link>
		        </div>
		      );
		    })
		  }
		  </div>
		</div>
	)
}
