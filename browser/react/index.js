import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistContainer from './containers/ArtistContainer';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import LyricsContainer from './containers/LyricsContainer';

import App from './components/App';
import Albums from './components/Albums';
import Songs from './components/Songs';

import axios from 'axios';
import store from './store';
import {receiveAlbums, getAlbumById} from './action-creators/albums';
import {receiveArtists, getArtistById} from './action-creators/artists';
import {receivePlaylists, getPlaylistById, loadAllSongs} from './action-creators/playlists';

import { Provider } from 'react-redux';


import StationsContainer from './containers/StationsContainer'

const onAppEnter = function () {

  Promise.all([
    axios.get('/api/albums'),
    axios.get('/api/artists'),
    axios.get('/api/playlists')
  ])
    .then(responses => responses.map(r => r.data))
    .then(([albums, artists, playlists]) => {
      store.dispatch(receiveAlbums(albums));
      store.dispatch(receiveArtists(artists));
      store.dispatch(receivePlaylists(playlists));
      store.dispatch(loadAllSongs())
    });

};

const onAlbumEnter = function (nextRouterState) {
  const albumId = nextRouterState.params.albumId;
  store.dispatch(getAlbumById(albumId));
};
const onArtistEnter = function (nextRouterState) {
  const artistId = nextRouterState.params.artistId;
  store.dispatch(getArtistById(artistId));
};
const onPlaylistEnter = function (nextRouterState) {
  const playlistId = nextRouterState.params.playlistId;
  store.dispatch(getPlaylistById(playlistId));
};

const onStationsEnter = function (nextRouterState) {
  store.dispatch(loadAllSongs())
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/albums" component={AlbumsContainer}/>
        <Route path="/albums/:albumId" component={AlbumContainer} onEnter={onAlbumEnter}/>
        <Route path="/stations" component={StationsContainer} />
        <Route path="/artists" component={FilterableArtistsContainer}/>
        <Route path="/artists/:artistId" component={ArtistContainer} onEnter={onArtistEnter}>
          <Route path="albums" component={Albums}/>
          <Route path="songs" component={Songs}/>
        </Route>
        <Route path="/new-playlist" component={NewPlaylistContainer}/>
        <Route path="/playlists/:playlistId" component={PlaylistContainer} onEnter={onPlaylistEnter}/>
        <Route path="/lyrics" component={LyricsContainer} />
        <IndexRedirect to="/albums"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
