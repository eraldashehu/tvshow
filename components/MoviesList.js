import React from "react";
import MovieDetails from "./MovieDetails";

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.movies.map((record) => {
      return (
        <MovieDetails
          key={record.id}
          record={record}
          addToFav={this.props.addToFav}
          removeFromFav={this.props.removeFromFav}
          isFavorite={
            (this.props.favorites || []).findIndex((x) => x === record.id) > -1
          }
        />
      );
    });
  }
}

export default MoviesList;
