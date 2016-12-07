import React from 'react';
import { Link } from 'react-router';
const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
];

export default function (props) {
	return (
		<div>
		  <h3>Stations</h3>
		  <div className="list-group">
		  {
		    DUMMY_STATIONS_DATA.map(station => {
		      return (
		        <div className="list-group-item" key={station.name}>
		          <Link to='/stations'>{station.name}</Link>
		        </div>
		      );
		    })
		  }
		  </div>
		</div>
	)
}