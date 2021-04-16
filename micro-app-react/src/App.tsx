import React, { FC } from "react";

import classes from "./App.less";

interface AppProps {
  data: number;
}

const App: FC<AppProps> = (props) => {
  const { data } = props;
  return (
    <div className={classes.container}>
      React micro App <span>{data}</span>
    </div>
  );
};

export default App;
