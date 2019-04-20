import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      timer: null,
    };
  }

  formatTime(time) {
    const date = new Date(null);
    date.setSeconds(time);
    return date.toISOString().substr(14, 5);
  }

  toggleTimer() {
    this.setState(prevState => ({
      timer: prevState.timer
        ? clearInterval(prevState.timer)
        : setInterval(() => {
            this.setState(prevState => ({
              time: prevState.time + 1,
            }));
          }, 1000),
    }));
  }

  render() {
    return (
      <div id="timer">
        <span className="display-time">{this.formatTime(this.state.time)}</span>
        <button
          className="btn btn-start-pause"
          onClick={this.toggleTimer.bind(this)}
        >
          {this.state.timer ? 'Pause' : 'Start'}
        </button>
      </div>
    );
  }
}
