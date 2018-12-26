import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect,withRouter} from 'react-router-dom';
import Login from '../container/Login';
import Home from '../container/Home';
import AuthRoute from '../route/AuthRoute';
import HomeRoute from '../route/HomeRoute';
import Content1 from "../container/Content1";
import Content2 from "../container/Content2";
import Register from '../container/Register';

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
                    <Route path="/register" exact component={Register}></Route>

                    <Route path="/home" component={HomeRoute}>
                       {/*<Home>*/}
                           {/*<Route path="/content1" component={Content1}></Route>*/}
                           {/*<Route path="/content2" component={Content2}></Route>*/}
                       {/*</Home>*/}
                    </Route>
                </div>
            </Router>
        )
    }
}

export default IndexRoute;