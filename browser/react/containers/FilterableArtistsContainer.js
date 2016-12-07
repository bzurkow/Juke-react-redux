import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

import store from '../store';

class FilterableArtistsContainer extends React.Component {

  constructor() {

    super();

    this.state = Object.assign({
      inputValue: ''
    }, store.getState().artists);

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().artists);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default FilterableArtistsContainer;
