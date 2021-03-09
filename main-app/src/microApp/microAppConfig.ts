import { RegistrableApp } from "qiankun/es/interfaces";

export const microAppOptions: RegistrableApp<CommonObject>[] = [
  {
    name: "react",
    entry: "http://localhost:8001/",
    container: "#micro-app-container",
    activeRule: "/react",
  },
];
