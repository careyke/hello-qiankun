import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import start from "./microApp";

// start();

const root: Element | null = document.querySelector("#main-app");

ReactDOM.render(<App />, root);
