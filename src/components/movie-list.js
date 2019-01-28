import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    // found out the hard way that you can't put logic/loops
    // inside JSX, but you can inject it from outside
    let allmovies = [];
    this.props.movies.forEach((movie) => {
      movie['key'] = movie.id;
      let thisMovie = <ul key={movie.id}><li>{movie.name}</li></ul>;
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
