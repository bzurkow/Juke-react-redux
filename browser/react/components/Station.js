import React from 'react';
import {Link} from 'react-router';
import SongsContainer from '../containers/SongsContainer';

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
  const stationSongs = props.stationSongs
  const routeGenre = props.params.genreName;

	return (

		<div>
		  <h3>{routeGenre}</h3>
      <SongsContainer {...props} songs={stationSongs} />
		</div>
	)
}

// {
//   stationSongs.map(song => {
//     return (
//       <div className="list-group-item" key={song.id}>
//         {song.name}
//       </div>
//     )
//   })
// }




// Object.keys(stations).filter(genre => {
//   return genre===routeGenre
// }).map(genre => {
//   return (
//     <div className="list-group-item" key={genre}>
//       <Link to={`/stations/${genre}`}>{genre}</Link>
//     </div>
//   );
// })
