import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <Timer />
      </div>
    );
  }
}

class Timer extends React.Component {
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
    return date.toISOString().substr(11, 8);
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

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Tomatillo</h1>
        <Dashboard />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
