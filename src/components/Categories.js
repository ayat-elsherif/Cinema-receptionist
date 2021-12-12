import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <Link
        to={`/categories/${cat.id}`}
        key={cat.id}
        className="me-3"
        onClick={this.showThisCategory}
      >
        category{cat.id}
      </Link>
    ));
  };
  render() {
    return (
      <aside className="sideBar">
        <div className="container">{this.categoryHandle()}</div>
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
