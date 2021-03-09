import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import classes from "./App.less";
import AppMenu from "./menu/index";
import MainRoute from "./routes/index";

const App: FC = () => {
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.left}>
          <AppMenu />
        </div>
        <div className={classes.right} id="micro-app-container">
          <Route path="/">
            <MainRoute />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
