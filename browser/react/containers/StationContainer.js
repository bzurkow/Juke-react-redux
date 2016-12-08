import React from 'react';
import redux, {connect} from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils'


const mapStateToProps = function (state, ownProps) {
  console.log('STATE', state)
  const stationSongs = state.songs.filter((song) => {
    return song.genre === ownProps.params.genreName
  }).map(convertSong)

  return { stationSongs };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
