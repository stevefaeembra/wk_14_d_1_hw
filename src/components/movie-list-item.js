import React, { Component } from 'react';

class MovieListItem extends Component {

  render() {
    return (
      <div className="movielistitem">
        <a href={this.props.url}>
          <div>
            {this.props.name}
          </div>
        </a>
      </div>
    );
  }
}

export default MovieListItem;
