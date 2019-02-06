import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { Controls } from "./Controls";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: Controls
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];