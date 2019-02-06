import React, { Component } from "react";
import { e, USER_ACTIONS, EVENTS } from "../event-bus";
import ResetParcel from "../reset/ResetParcel";
import "./counter.css";

const UNIT = 1;

export default class Counter extends Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(
      {
        count: this.state.count + UNIT
      },
      () => {
        if (this.state.count > 0) {
          e.emit(EVENTS.ENABLE_BUTTON);
        }
      }
    );
  };

  sub = () => {
    this.setState(
      {
        count: this.state.count - UNIT
      },
      () => {
        if (this.state.count <= 0) {
          return e.emit(EVENTS.LOWER_BOUND);
        }
      }
    );
  };
  reset = () => {
    this.setState({
      count: 0
    });
    e.emit(EVENTS.LOWER_BOUND);
  };

  componentDidMount() {
    e.on(USER_ACTIONS.ADD, this.add);
    e.on(USER_ACTIONS.SUB, this.sub);
    e.on(USER_ACTIONS.RESET, this.reset);
    if (this.state.count <= 0) {
      e.emit(EVENTS.LOWER_BOUND);
    }
  }

  componentWillUnmount() {
    e.off(USER_ACTIONS.ADD, this.add);
    e.off(USER_ACTIONS.SUB, this.sub);
    e.off(USER_ACTIONS.RESET, this.reset);
  }
  render() {
    return (
      <>
        <h1>React</h1>
        <h2>{this.state.count}</h2>
        <ResetParcel onReset={this.reset} />
      </>
    );
  }
}
