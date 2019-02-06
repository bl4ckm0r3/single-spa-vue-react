import Vue from "vue";
import singleSpaVue from "single-spa-vue";
// import { e, USER_ACTIONS } from "../event-bus";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    template: `<button @click.stop.prevent="onReset">Reset</button>`,
    // obviously you can use your own methods instead of props
    // methods: {
    //   reset: function() {
    //     e.emit(USER_ACTIONS.RESET);
    //   }
    // }
  }
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
