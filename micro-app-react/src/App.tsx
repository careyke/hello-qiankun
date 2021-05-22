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
    // (window as CommonObject).test = 100;
    // console.log((window as CommonObject).test);
  }, []);

  // 测试动态添加style
  useEffect(() => {
    const ele = document.querySelector("#test-style");
    if (ele) return;
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "test-style";
    // const innerHtml = "span{color:red}";
    // style.innerHTML = innerHtml;

    document.querySelector("head")?.appendChild(style);

    // 直接设置CSSRules
    style.sheet?.insertRule("span{color:red}", 0);
    style.textContent = "";
  }, []);

  return (
    <div className={classes.container}>
      React micro App <span>{data}</span>
    </div>
  );
};

export default App;
