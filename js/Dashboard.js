import React, { Component } from 'react';
import Timer from './Timer';

export default class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Timer />
      </div>
    );
  }
}
