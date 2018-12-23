import React, { Component } from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Login from '../container/Login';


class IndexRoute extends Component{
    constructor(props){
        super(props);
        this.states={
            isLogin:false,
            RedirectTo:"/login",
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
                            <Route path="/" component={Login}></Route>
                            <Route path="/login" component={Login}></Route>

                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default IndexRoute;