interface MenuOption {
  key: string;
  title: string;
  to: string;
}

export const menuConfig: MenuOption[] = [
  {
    key: "/",
    title: "Main",
    to: "/",
  },
  {
    key: "/react",
    title: "React",
    to: "/react",
  },
  {
    key: "/vue",
    title: "Vue",
    to: "/vue",
  },
];
