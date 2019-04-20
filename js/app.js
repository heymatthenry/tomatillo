import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Tomatillo</h1>
        </header>
        <Dashboard />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
