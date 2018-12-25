import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch,withRouter} from 'react-router-dom';
import Content1  from '../container/Content1';
import Content2  from '../container/Content2';
import Home from '../container/Home'


class MyRoute extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
               <Home>
                   <Route path="/home/content1" component={Content1}></Route>
                   <Route path="/home/content2" component={Content2}></Route>
               </Home>
            </Router>
        )
    }
}

export default MyRoute;