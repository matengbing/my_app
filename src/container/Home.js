import React,{Component} from 'react';
import NAV from '../nav/NAV';
import '../App.css';
import LeftNAV from '../nav/LeftNAV';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,
            redirectTo:"/login"
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NAV/>
                </header>

                <div className="content">
                    <div className="content_left_nav">
                        <LeftNAV></LeftNAV>
                    </div>
                    <div className="content_right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
