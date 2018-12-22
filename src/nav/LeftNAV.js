import React, { Component } from 'react';
import './leftnav.css';

class LeftNAV extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App_nav_content_left">
                <ul>
                    <li><a>左侧导航1</a></li>
                    <li><a>左侧导航2</a></li>
                    <li><a>左侧导航3</a></li>
                    <li><a>左侧导航4</a></li>
                </ul>
            </div>
        )
    }
}

export default LeftNAV;