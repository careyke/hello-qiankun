import React, { FC, useEffect } from "react";
import { message } from "antd";

import classes from "./App.less";

interface AppProps {
  data: number;
}

const App: FC<AppProps> = (props) => {
  const { data } = props;
  useEffect(() => {
    message.error("error");
  }, []);

  return (
    <div className={classes.container}>
      React micro App <span>{data}</span>
    </div>
  );
};

export default App;
