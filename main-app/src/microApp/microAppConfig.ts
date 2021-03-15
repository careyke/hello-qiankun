import { RegistrableApp } from "qiankun/es/interfaces";

export const microAppOptions: RegistrableApp<CommonObject>[] = [
  {
    name: "react",
    entry: "http://localhost:8001/",
    container: "#micro-app-container",
    activeRule: "/app/react",
  },
  {
    name: "vue",
    entry: "http://localhost:8002/",
    container: "#micro-app-container",
    activeRule: "/app/vue",
  },
];
