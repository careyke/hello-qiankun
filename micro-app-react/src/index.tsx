import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const localRoot = document.querySelector("#app");

const render = (props: CommonObject) => {
  const { container } = props;
  const root = container ? container.querySelector("#app") : localRoot;
  ReactDOM.render(<App />, root);
};

// 独立渲染
if (!(window as CommonObject).__POWERED_BY_QIANKUN__) {
  render({});
}

// 微前端应用生命周期函数
export const bootstrap = async () => {
  console.log("react app bootstrap");
};

export const mount = (props: CommonObject) => {
  render(props);
};

export const unmount = (props: CommonObject) => {
  const { container } = props;
  const root = container ? container.querySelector("#root") : localRoot;
  ReactDOM.unmountComponentAtNode(root);
};
