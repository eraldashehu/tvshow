import React from "react";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";

class MovieContainerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      favorites: [],
    };
  }

  getData = () => {
    this.setState({ loading: true });
    fetch("http://api.tvmaze.com/schedule?country=US")
      .then((response) => response.json())
      .then((results) => {
        this.setState((previousState) => ({
          ...previousState,
          favorites: [],
          data: results,
        }));
      })
      .finally((e) => {
        this.setState((previousState) => ({
          ...previousState,
          loading: false,
        }));
      });
  };

  componentDidMount() {
    this.getData();
  }

  addToFav = (id) => {
    this.setState((previousState) => {
      previousState.favorites.push(id);
      console.log(previousState.favorites);
      return {
        data: previousState.data,
        loading: false,
        favorites: previousState.favorites,
      };
    });
  };

  removeFromFav = (id) => {
    this.setState((previousState) => {
      const indexEl = previousState.favorites.findIndex((x) => x === id);
      previousState.favorites.splice(indexEl, 1);
      console.log(previousState.favorites);
      return {
        data: previousState.data,
        loading: false,
        favorites: previousState.favorites,
      };
    });
  };

  render() {
    if (this.state.loading) return "Loading";
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div
          className="ui segment"
          style={{
            textAlign: "center",
            color: "deepskyblue",
            fontSize: "30px",
          }}
        >
          Tv Shows
        </div>
        <div className="ui segment">
          <div className="ui three column grid">
            <MoviesList
              movies={this.state.data}
              favorites={this.state.favorites || []}
              addToFav={this.addToFav}
              removeFromFav={this.removeFromFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainerApp;
