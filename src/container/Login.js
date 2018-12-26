import React,{Component} from 'react';
import './login.css';

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

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(){
        console.log("登录");
    }

    handleChange(key,e){
        this.setState({[key]: e.target.value});
    }

    render(){
        return (
            <div>
                <div className="login_form">
                    <h3 style={{textAlign: "center"}}>Login</h3>
                    <p className="err_msg">{this.state.err_msg}</p>
                    <input type="text" value={this.state.username} placeholder="用户名"
                           onChange={(e)=>{this.handleChange('username',e)}}
                    />
                    <br/>
                    <input type="password" value={this.state.password} placeholder="密码"
                        onChange={(e)=>{this.handleChange('password',e)}}
                    />
                    <br/>
                    <input type="button" value="Login"
                        onClick={(e)=>{this.handleSubmit()}}
                    />
                </div>
            </div>
        )
    }
}

export default Login;