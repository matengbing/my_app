import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';
import Login from '../container/Login';
import Home from '../container/Home';
import AuthRoute from '../route/AuthRoute';

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
            <div>
                <div>
                    <Router>
                        <div>
                            <AuthRoute/>
                            <Route path="/login" exact component={Login}></Route>
                            <Route path="/home" component={Home}></Route>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default IndexRoute;