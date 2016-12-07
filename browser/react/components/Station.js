import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

const DUMMY_GENRE_NAME = 'Jazz';
const DUMMY_SONGS = [{
  id: 1,
  name: "A Love Supreme",
  genre: "Jazz",
  artists: [{ name: "John Coltrane" }]
}];
const DUMMY_CURRENT_SONG = {};
const DUMMY_IS_PLAYING = false;
const DUMMY_TOGGLE_ONE = function () {};

export default function(props){
	const routeGenre = props.routeParams.genreName;
	const stations = props.stations;
	return (
	
		<div>
		  <h3>{routeGenre}</h3>
		
		  <div className="list-group">
		  {
		    Object.keys(stations).filter(genre => {
		    	return genre===routeGenre
		    }).map(genre => {
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