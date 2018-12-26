import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Content1 from "../container/Content1";
import Content2 from "../container/Content2";
import Home from '../container/Home';
class HomeRoute extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Home>
                    <Route path={`${this.props.match.path}/content1`} component={Content1} ></Route>
                    <Route path={`${this.props.match.path}/content2`} component={Content2}></Route>
                </Home>
            </div>
        )
    }
}

export default HomeRoute;