import React,{Component} from 'react';
import {Route,BrowserRouter as Router, Switch,Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {isLogin} from  '../redux/User.redux';
import {connect} from 'react-redux';
import axios from 'axios';
class AuthRoute extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            redirectTo:"/home",
            redirectToLogin:"/login"
        }
    }

    componentWillMount(){
        /**
         * 请求数据，如果没有登录就跳转
         * */
        const publicList=['/login','register'];
        const pathname=this.props.location.pathname;
        if(pathname in publicList){
            return null;
        }

        // this.props.history.push('/login')
        //获取用户信息
        // axios.get('http://www.baidu.com').then((res)=>{
        //     if(res.status==200){
        //         if(res.data.code==1){
        //             //有登录信息
        //             console.log(res.data.data)
        //             this.props.history.push('/login')
        //         }else {
        //             console.log(this.props)
        //             this.props.history.push('/login')
        //         }
        //     }
        // })
    }
    render(){
        return (
            <div>
                {/*{*/}
                    {/*this.state.isLogin ? <Redirect to={this.state.redirectTo} />*/}
                        {/*: <Redirect to={this.state.redirectToLogin} />*/}
                {/*}*/}
            </div>
        )
    }
}

const actionCreators={isLogin};
AuthRoute=withRouter(AuthRoute);
AuthRoute=connect(null,actionCreators)(AuthRoute)
export default AuthRoute;