import React from 'react';
import Songs from '../components/Songs';
import {connect} from 'react-redux';
import { toggleSong } from '../action-creators/player'

const mapStateToProps = function(state, ownProps) {
  return {
    songs: ownProps.songs,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }

}

const mapDispatchToProps = function(dispatch){
  return {
    toggleOne: function(song, list){
      return dispatch(toggleSong(song, list))
    }
  }

}

const SongsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);

export default SongsContainer
