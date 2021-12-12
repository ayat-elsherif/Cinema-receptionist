import React from "react";
import "./style.scss";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import SingleParty from "./components/SingleParty";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Categories />
          <MoviesList />
        </Route>
        <Route path="/movies/:id" exact component={SingleMovie} />
        <Route
          path="/movies/:movieId/parties/:PartyId"
          component={SingleParty}
        />
        <Route path="/categories/:id" component={SingleCategory} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
