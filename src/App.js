import React, { Component } from 'react';
import './App.css';
import IndexRoute from './route/IndexRoute';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux';
import {Provider} from 'react-redux';
let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <IndexRoute/>
            </div>
        </Provider>
    );
  }
}
export default App;
