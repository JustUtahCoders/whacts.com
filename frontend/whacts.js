import ReactDOM from "react-dom";
import React from "react";

const reactContainer = document.createElement("div");
reactContainer.id = "react-container";
document.body.appendChild(reactContainer);
ReactDOM.render(<button>Hi</button>, reactContainer);
