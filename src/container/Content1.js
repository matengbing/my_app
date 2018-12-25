import React, { Component } from 'react';

class Content1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colums: ["index", "name"],
            data: [
                {index:"1",name: "张三", age: 21, sex: "男", grade: 2},
                {index:"2",name: "张三", age: 21, sex: "男", grade: 2},
                {index:"3",name: "张三", age: 21, sex: "男", grade: 2},
                {index:"4",name: "张三", age: 21, sex: "男", grade: 2}
            ]
        }
    }
    render(){
        return (
            <div>
                <table>
                    <caption>用户列表</caption>
                    <tbody>
                    <tr>
                        {
                        this.state.colums.map((item)=>{
                            return (<th>{item}</th>)
                        })
                        }
                    </tr>

                    {
                        this.state.data.map((item)=>{
                            return (
                                <tr key={item.index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.grade}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Content1;