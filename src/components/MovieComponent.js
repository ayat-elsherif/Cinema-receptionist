import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RandImage } from "../helpers/imageArray";
class MovieComponent extends React.Component {
  render() {
    const { movie } = this.props;
    // let RandImage = RandImage();
    return (
      <div className="col-md-2 col-sm-6 col-12 mb-4">
        <Link to={`/movies/${movie.id}`}>
          <Card>
            <Card.Img variant="top" src={`/images/${RandImage()}`} />
            <Card.Body className="overlay">
              <Card.Title className="mb-4">{movie.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default MovieComponent;
