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
      isRunning: false,
      time: 0,
    };
  }

  toggleTimer() {
    this.setState(
      prevState => ({
        isRunning: !prevState.isRunning,
      }),
      () => {
        if (this.state.isRunning) {
          this.startTimer();
        }
      }
    );
  }

  startTimer() {
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  render() {
    return (
      <div id="timer">
        <span className="display-time">{this.state.time}</span>
        <button
          className="btn btn-start-pause"
          onClick={this.toggleTimer.bind(this)}
        >
          {this.state.isRunning ? 'Pause' : 'Start'}
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
