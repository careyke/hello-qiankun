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
    key: "/app/react",
    title: "React",
    to: "/app/react",
  },
  {
    key: "app/vue",
    title: "Vue",
    to: "/app/vue",
  },
];
