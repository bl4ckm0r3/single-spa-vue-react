import { e, USER_ACTIONS, EVENTS } from "../event-bus";
import "./controls.css";

const template = `
<div id="controls">
  <h1>Vue</h1>
  <div>
    <button @click.stop.prevent="sub" :disabled="disabled">Sub</button>
    <button @click.stop.prevent="add">Add</button>
  </div>
</div>
`;

export const Controls = {
  el: "#controls",
  template,
  mounted() {
    e.on(EVENTS.LOWER_BOUND, this.disableButton);
    e.on(EVENTS.ENABLE_BUTTON, this.enableButton);
  },

  beforeDestroy() {
    e.off(EVENTS.LOWER_BOUND, this.disableButton);
    e.off(EVENTS.ENABLE_BUTTON, this.enableButton);
  },
  data: {
    disabled: true
  },
  methods: {
    sub: function() {
      e.emit(USER_ACTIONS.SUB);
    },
    add: function() {
      e.emit(USER_ACTIONS.ADD);
    },
    disableButton: function() {
      this.disabled = true;
    },
    enableButton: function() {
      this.disabled = false;
    }
  }
};

