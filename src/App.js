import React, { Component } from 'react';
import './App.css';
import IndexRoute from './route/IndexRoute';
import Home from './container/Home';
import MyRoute from './route/MyRoute';
class App extends Component {
  render() {
    return (
      <div className="App">
          <IndexRoute/>

      </div>
    );
  }
}

export default App;
