import React, { Component } from 'react';
import './nav.css';
class NAV extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="app_nav-top">
                <ul>
                    <li><a>首页</a></li>
                    <li><a>内容</a></li>
                    <li><a>关于我们</a></li>
                </ul>
            </div>

        )
    }
}

export default NAV
