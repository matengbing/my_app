import React, { Component } from 'react';
import NAV from './nav/NAV';
import './App.css';
import LeftNAV from './nav/LeftNAV';
import MyRoute  from './route/MyRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NAV/>
        </header>

        <div className="content">
          <div className="content_left_nav">
            <LeftNAV></LeftNAV>
          </div>
            <div className="content_right">
                <MyRoute/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
