import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Content1  from '../container/Content1';
import Content2  from '../container/Content2';


class MyRoute extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Router>
                   <div>
                       <Route path="/content1" component={Content1}></Route>
                       <Route path="/content2" component={Content2}></Route>
                   </div>
                </Router>
            </div>
        )
    }
}

export default MyRoute;