import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Counter from "./Counter.js";

function domElementGetter() {
  return document.getElementById("counter");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Counter,
  domElementGetter,
  suppressComponentDidCatchWarning: true
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
