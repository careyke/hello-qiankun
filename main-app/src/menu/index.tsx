import React, { FC } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import { menuConfig } from "./config";

const { Item } = Menu;

const items = menuConfig.map((menu) => {
  const { key, to, title } = menu;
  return (
    <Item key={key}>
      <Link to={to}>{title}</Link>
    </Item>
  );
});

const AppMenu: FC = () => {
  const { pathname } = useLocation();

  return <Menu defaultSelectedKeys={[pathname]}>{items}</Menu>;
};

export default AppMenu;
