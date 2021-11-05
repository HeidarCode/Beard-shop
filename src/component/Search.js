import React, { Component } from 'react';
import styles from "./search.module.css"

class search extends Component {
    constructor(){
        super()
        this.state = {
            text : ""
        }
    }
    changeHandler = event => {
        this.setState({
            text: event.target.value

        })
    }
    render() {
        return (
            <div className = {styles.container}>
                <p>search model </p>
                
                <input  placeholder = "search ..." value ={this.state.text} onChange = {this.changeHandler}/>
                <br/>
                <br/>
                <span>{this.state.text}</span>
            </div>

        );
    }
}

export default search;