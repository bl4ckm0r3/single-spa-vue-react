import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "react",
  // loadingFunction
  () => import("./src/react/react.home.js"),
  // activityFunction
  location => location.pathname === "" || location.pathname === "/"
);

registerApplication(
  // Name of our single-spa application
  "vue",
  // loadingFunction
  () => import("./src/vue/vue.home.js"),
  // activityFunction
  location => location.pathname === "" || location.pathname === "/"
);

start();
