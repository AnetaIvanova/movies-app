import HomePage from "../components/HomePage";
import Saved from "../components/Saved";

import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
