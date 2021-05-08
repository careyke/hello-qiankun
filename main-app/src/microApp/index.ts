import { useEffect, useState } from "react";
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  removeGlobalUncaughtErrorHandler,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";

import { microAppOptions } from "./microAppConfig";
import { getSharedData } from "./sharedData";

export const useQiankun = () => {
  useEffect(() => {
    const errorHandler = (event: Event | string) => {
      console.log(event);
    };

    /**
     * 注册子应用
     */
    registerMicroApps(
      microAppOptions.map((option) => {
        option.props = { getSharedData };
        return option;
      })
    );

    /**
     * 添加全局的未捕获异常处理器
     */
    addGlobalUncaughtErrorHandler(errorHandler);

    // 启动qiankun
    start({
      sandbox: { experimentalStyleIsolation: true },
    });

    return () => {
      removeGlobalUncaughtErrorHandler(errorHandler);
    };
  }, []);
};

export const useQiankunCommunication = (props: CommonObject) => {
  const [action] = useState<MicroAppStateActions>(() => {
    return initGlobalState(props);
  });

  useEffect(() => {
    action.setGlobalState(props);
    action.onGlobalStateChange((state) => {
      console.log("new state", state);
    });
    return () => {
      action.offGlobalStateChange();
    };
  }, [props, action]);
};
