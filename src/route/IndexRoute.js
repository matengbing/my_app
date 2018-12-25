import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect,withRouter} from 'react-router-dom';
import Login from '../container/Login';
import Home from '../container/Home';
import AuthRoute from '../route/AuthRoute';
import MyRoute from '../route/MyRoute'
class IndexRoute extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            redirectTo:"/home",
            username:"",
            password:""
        }
    }

    render(){
        return (
            <Router>
                <div>
                    <AuthRoute/>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/home" component={MyRoute}></Route>
                </div>
            </Router>
        )
    }
}

export default IndexRoute;