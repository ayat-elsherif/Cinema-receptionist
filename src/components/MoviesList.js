import React from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import MovieComponent from "./MovieComponent";
class MoviesList extends React.Component {
  componentDidMount() {
    return this.props.fetchMovies();
  }
  moviesHandling = () => {
    return this.props.movies.map((movie) => (
      <MovieComponent movie={movie} key={movie.id} />
    ));
  };
  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-5 main-title">All Movies</h2>
        <div className="row">{this.moviesHandling()}</div>
      </div>
    );
  }
}
const mapStatesToProps = (state) => {
  return { movies: Object.values(state.ticketing) };
};
export default connect(mapStatesToProps, { fetchMovies })(MoviesList);
