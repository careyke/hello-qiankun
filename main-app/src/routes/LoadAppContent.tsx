import React, { FC, useEffect, useRef, useState } from "react";
import { loadMicroApp, MicroApp } from "qiankun";

import classes from "./routes.less";

const LoadAppContent: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const microAppRef = useRef<MicroApp>();
  const [count, setCount] = useState(100);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (!ref.current) return;
    microAppRef.current = loadMicroApp({
      name: "react",
      entry: "http://localhost:8001/",
      container: ref.current,
    });
    microAppRef.current.loadPromise.then(() => {
      console.log("load");
    });
    microAppRef.current.bootstrapPromise.then(() => {
      console.log("bootstrap");
    });
    microAppRef.current.mountPromise.then(() => {
      console.log("mount");
    });
    microAppRef.current.unmountPromise.then(() => {
      console.log("unmount");
    });

    return () => {
      microAppRef.current && microAppRef.current.unmount();
    };
  }, []);

  useEffect(() => {
    if (microAppRef.current && microAppRef.current.update) {
      console.log("update");
      microAppRef.current.update({ count: count });
    }
  }, [count]);

  return (
    <div className={classes.microAppContainer}>
      <button onClick={handleClick}>add</button>
      <div ref={ref}></div>
    </div>
  );
};

export default LoadAppContent;
