import React, { Component } from 'react';

class Tags extends Component {
    state = {
        plus: false,
        tags: ['#foaming', '#notfoaming'],
    }

    handleClick = (event) => {
        this.setState({
            plus: true,
        })
    }

    render(){
        return (
        <div style={{backgroundColor:"yellow", textAlign:"left"}}>
            tags: 
            <button style={{border:"none", backgroundColor:"transparent"}} onClick={event => this.handleClick}>+</button>
        </div>
        );
    }
}

export default Tags;