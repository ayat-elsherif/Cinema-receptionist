import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { showMovie } from "../actions";
import { Link } from "react-router-dom";
class SingleMovie extends React.Component {
  movieId = this.props.match.params.id;
  componentDidMount() {
    return this.props.showMovie(this.props.match.params.id);
  }
  partiesHandling = () => {
    return this.props.movie.map((party) => (
      <div className="col-md-2 col-sm-6 col-12" key={party.party_id}>
        <Card>
          <Card.Img variant="top" src="/images/red-notice.jpg" />
          <Card.Body>
            <Card.Title>{party.movie_name}</Card.Title>
            <Card.Text>Hall name: {party.hall_name}</Card.Text>
            <Link to={`/movies/${this.movieId}/parties/${party.party_id}`}>
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    ));
  };
  render() {
    if (this.props.movie.length === 0) {
      return <div>loaddding</div>;
    } else {
      // console.log(this.props.movie, "movies");

      return (
        <div className="container mt-5">
          <div className="row">{this.partiesHandling()}</div>
        </div>
      );
    }
  }
}
const mapStatesToProps = (state) => {
  return { movie: state.parties };
};
export default connect(mapStatesToProps, { showMovie })(SingleMovie);
