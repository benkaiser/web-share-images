import React from "../snowpack/pkg/react.js";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "../snowpack/pkg/react-router-dom.js";
import "./App.css.proxy.js";
import "../snowpack/pkg/purecss/build/pure-min.css.proxy.js";
import "../snowpack/pkg/purecss/build/grids-responsive-min.css.proxy.js";
import WebShareHTML from "./examples/WebShareHTML.js";
import WebShareCanvas from "./examples/WebShareCanvas.js";
import WebShareImage from "./examples/WebShareImage.js";
function App({}) {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pure-g"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pure-u-1 pure-u-sm-1-2 pure-u-md-1-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pure-menu sidebar"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "pure-menu-heading"
  }, "Examples"), /* @__PURE__ */ React.createElement("ul", {
    className: "pure-menu-list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "pure-menu-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "pure-menu-link",
    to: "/image"
  }, "Image Sharing")), /* @__PURE__ */ React.createElement("li", {
    className: "pure-menu-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "pure-menu-link",
    to: "/canvas"
  }, "Canvas Sharing")), /* @__PURE__ */ React.createElement("li", {
    className: "pure-menu-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "pure-menu-link",
    to: "/html"
  }, "HTML Sharing"))))), /* @__PURE__ */ React.createElement("div", {
    className: "pure-u-1 pure-u-sm-1-2 pure-u-md-4-5"
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/canvas"
  }, /* @__PURE__ */ React.createElement(WebShareCanvas, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/html"
  }, /* @__PURE__ */ React.createElement(WebShareHTML, null)), /* @__PURE__ */ React.createElement(Route, null, /* @__PURE__ */ React.createElement(WebShareImage, null)))))));
}
export default App;
