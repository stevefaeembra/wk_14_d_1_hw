import React, { Component } from 'react';
import InitialState from '../db/initial-state';
import Header from "../components/header";
import MovieList from "../components/movie-list";
import MoreMovies from "../components/more-movies";

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  render() {
    return (
      <div className='page'>
        <Header />
        <MovieList />
        <MoreMovies />
      </div>
    );
  }
}

export default Page;
