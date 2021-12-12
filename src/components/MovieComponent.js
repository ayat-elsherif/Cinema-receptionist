import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class MovieComponent extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-2 col-sm-6 col-12 mb-4">
        <Card>
          <Card.Img variant="top" src="/images/red-notice.jpg" />
          <Card.Body>
            <Card.Title className="mb-4">{movie.name}</Card.Title>
            {/* <Card.Text>Category: {movie.category_id}</Card.Text> */}
            <Link to={`/movies/${movie.id}`}>
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MovieComponent;
