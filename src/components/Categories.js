import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { fetchCategories, showCategory } from "../actions";
class Categories extends React.Component {
  componentDidMount = () => {
    return this.props.fetchCategories();
    console.log(this.props);
  };

  showThisCategory = () => {
    if ("paramsId" in this.props) {
      this.props.showCategory(this.props.paramsId);
    }
  };

  categoryHandle = () => {
    return this.props.categories.map((cat) => (
      <Nav className="">
        <Nav.Link>
          <Link
            to={`/categories/${cat.id}`}
            key={cat.id}
            className="me-3"
            onClick={this.showThisCategory}
          >
            category{cat.id}
          </Link>
        </Nav.Link>
      </Nav>
    ));
  };
  render() {
    return (
      <aside className="sideBar">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="d-block d-lg-none">
              Categories
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {this.categoryHandle()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </aside>
    );
  }
}
const mapStatesToProps = (state) => {
  //   console.log(state.categories, "categories");
  return { categories: state.categories };
};
export default connect(mapStatesToProps, { fetchCategories, showCategory })(
  Categories
);
