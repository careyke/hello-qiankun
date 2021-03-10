import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from "qiankun";

import { microAppOptions } from "./microAppConfig";

/**
 * 注册子应用
 */
registerMicroApps(microAppOptions);

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.log(event);
});

export default start;
