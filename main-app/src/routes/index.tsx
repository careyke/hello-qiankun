import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import MainAppContent from "./MainAppContent";
import MicroAppContent from "./MicroAppContent";

const AppRoute: FC = () => {
  return (
    <Switch>
      <Route path="/app">
        <MicroAppContent />
      </Route>
      <Route path="/">
        <MainAppContent />
      </Route>
    </Switch>
  );
};

export default AppRoute;
