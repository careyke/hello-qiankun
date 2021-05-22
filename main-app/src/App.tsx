import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import classes from "./App.less";
import AppMenu from "./menu/index";
import AppRoute from "./routes";

const App: FC = () => {
  // useEffect(() => {
  //   Object.defineProperty(window, "test", {
  //     get: function () {
  //       return 1;
  //     },
  //     set: function (value) {
  //       this.test = value;
  //     },
  //     configurable: false,
  //     enumerable: true,
  //   });
  // }, []);
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.left}>
          <AppMenu />
        </div>
        <div className={classes.right}>
          <AppRoute />
        </div>
      </div>
    </Router>
  );
};

export default App;
