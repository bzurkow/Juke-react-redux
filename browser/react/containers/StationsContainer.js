import React from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';
import redux from 'react-redux'


  function makeStation(songs){
    console.log(songs)
    const stations = {};

    songs.forEach(song => {
      const genre = song.genre;
      stations[genre] = stations[genre] || [];
      stations[genre].push(song);
    });

    return stations;
  }


  function mapStateToProps (state) {
    console.log(state)
    return {
      stations: makeStation(state.songs)
    }
  }

  function mapDispatchToProps(dispatch){
    return {}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
