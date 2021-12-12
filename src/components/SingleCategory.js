import React from "react";
import { connect } from "react-redux";
import { showCategory } from "../actions";
import Categories from "./Categories";
import MovieComponent from "./MovieComponent";

class SingleCategory extends React.Component {
  componentDidMount() {
    this.props.showCategory(this.props.match.params.id);
  }

  moviesHandling = () => {
    return this.props.movies.map((movie) => (
      <MovieComponent movie={movie} key={movie.id} />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <Categories paramsId={this.props.match.params.id} />
        <div className="container mt-5">
          <h2 className="text-center mb-5 main-title">
            {/* Category
            {this.props.movies[0].category_id
              ? this.props.movies[0].category_id
              : null} */}
          </h2>

          <div className="row">{this.moviesHandling()}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatesToProps = (state) => {
  // console.log(state.category, "category from mapstate");
  return { movies: state.category };
};

export default connect(mapStatesToProps, { showCategory })(SingleCategory);
