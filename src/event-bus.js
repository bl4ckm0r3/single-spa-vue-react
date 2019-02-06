import Eev from "eev";

export const e = new Eev()

export default e

export const USER_ACTIONS = Object.freeze({
  ADD: "add",
  SUB: "sub",
  RESET: "reset"
});

export const EVENTS = Object.freeze({
  LOWER_BOUND: "lower_bound",
  ENABLE_BUTTON: "enable_button"
});