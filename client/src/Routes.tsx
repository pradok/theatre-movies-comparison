import React from "react";
import { Route, Switch } from "react-router-dom";
import { MovieList, MoviePrices } from "./modules/movies";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={"/movie/:id"} component={MoviePrices} />
      <Route path={"/"} component={MovieList} />
    </Switch>
  );
};
