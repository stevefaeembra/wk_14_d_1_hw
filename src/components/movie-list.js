import React, { Component } from 'react';
import MovieListItem from './movie-list-item';

class MovieList extends Component {
  render() {
    // found out the hard way that you can't put logic/loops
    // inside JSX, but you can inject it from outside
    let allmovies = [];
    this.props.movies.forEach((movie) => {
      movie['key'] = movie.id;
      let thisMovie = <MovieListItem key={movie.id} name={movie.name} url={movie.url} />
      allmovies.push(thisMovie);
    });
    return (
      <div className="allmovies">
        {allmovies}
      </div>
    )
  }
}

export default MovieList;
