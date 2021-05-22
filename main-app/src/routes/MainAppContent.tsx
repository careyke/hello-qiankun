import React, { FC, useState } from "react";

import MicroAppContent from "./MicroAppContent";
import { useQiankun } from "../microApp";
import { setSharedData } from "../microApp/sharedData";
import LoadAppContent from "./LoadAppContent";

const MainAppContent: FC = () => {
  const [data, setState] = useState({ count: 1 });
  setSharedData(data);

  const handleClick = () => {
    setState({ count: data.count + 1 });
  };
  const handleClick01 = () => {
    setState({ count: data.count - 1 });
  };

  useQiankun();

  return (
    <div>
      <div>Main App</div>
      <button onClick={handleClick01}>减1</button>
      <span>{data.count}</span>
      <button onClick={handleClick}>加1</button>

      {data.count > 1 ? <LoadAppContent /> : null}
      <MicroAppContent />
    </div>
  );
};

export default MainAppContent;
