import React, { FC, useState } from "react";

import MicroAppContent from "./MicroAppContent";
import { useQiankun } from "../microApp";
import { setSharedData } from "../microApp/sharedData";

const MainAppContent: FC = () => {
  const [data, setState] = useState({ count: 1 });
  setSharedData(data);

  const handleClick = () => {
    setState({ count: data.count + 1 });
  };

  useQiankun();

  return (
    <div>
      <div>Main App</div>
      <button onClick={handleClick}>add</button>
      <span>{data.count}</span>
      <MicroAppContent />
    </div>
  );
};

export default MainAppContent;
