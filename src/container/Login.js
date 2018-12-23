import React,{Component} from 'react';
import './login.css';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';
import Home from '../container/Home';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            redirectTo:"/home",
            username:"",
            password:"",
            err_msg:""
        }

        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    render(){

        return (
            <div>

                {this.state.isLogin ? <Redirect to={this.state.redirectTo} /> : console.log("ss") }

                <div className="login_form">
                    <h3 style={{textAlign: "center"}}>Login</h3>
                    <p className="err_msg">{this.state.err_msg}</p>
                    <input type="text" value={this.state.username} placeholder="用户名"
                           onChange={this.handleUsernameChange}
                    />
                    <br/>
                    <input type="password" value={this.state.password} placeholder="密码"
                        onChange={this.handlePasswordChange}
                    />
                    <br/>
                    <input type="button" value="Login" />
                </div>
            </div>
        )
    }
}

export default Login;