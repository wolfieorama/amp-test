import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { RatingList } from "./RatingList";
import { CreateRating } from "./CreateRating";
import { ViewRating } from "./ViewRating";

export const RatingIndex = (): React.ReactElement => {
  useBreadcrumbs("/ratings/", "ratings");

  return (
    <Switch>
      <PrivateRoute exact path={"/ratings/"} component={RatingList} />
      <PrivateRoute path={"/ratings/new"} component={CreateRating} />
      <PrivateRoute path={"/ratings/:id"} component={ViewRating} />
    </Switch>
  );
};
