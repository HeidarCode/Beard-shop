import React, { Component } from 'react';
import styles from "./Cards.module.css"
import Card from './Card';
import Baget from "../images/Baget.jpg"
import Fantezi from "../images/Fantezi.jpg"
import sonati from "../images/s.jpg"
import tost from "../images/tost.jpg"

class Cards extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <Card  image ={Baget} name = "Baget" cost ="400 $"/>
                <Card  image ={Fantezi} name = "Fantasy" cost ="18 $"/>
                <Card  image ={sonati} name = "traditional" cost ="12 $"/>
                <Card  image ={tost} name = "toast" cost ="10 $"/>
                
                
                
            </div>
        );
    }
}

export default Cards;