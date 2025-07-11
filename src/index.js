import React from "react";
import ReactDOM from "react-dom";

// Import utility to suppress specific React lifecycle warnings
import "./utils/suppressWarnings";

// Import styles
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
