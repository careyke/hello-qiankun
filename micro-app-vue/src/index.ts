import { createApp, App } from "vue";

import { default as AppRoot } from "./App.vue";

const localRoot = document.querySelector("#app");
let app: App<Element>;

const render = (props: CommonObject) => {
  const { container } = props;
  const root = container ? container.querySelector("#app") : localRoot;
  app = createApp(AppRoot);
  app.mount(root);
};

// 独立渲染
if (!(window as CommonObject).__POWERED_BY_QIANKUN__) {
  render({});
}

// 微前端应用生命周期函数
export const bootstrap = async () => {
  console.log("vue app bootstrap");
};

export const mount = async (props: CommonObject) => {
  render(props);
};

export const unmount = async () => {
  app && app.unmount();
};
