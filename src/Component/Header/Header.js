import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src="/Images/hbclogo.png" height="60" width="80" className="app-logo" alt="Hudson's Bay Company" />
        <div className='title'>Coffee Event</div>
      </header>
    );
  }
}


