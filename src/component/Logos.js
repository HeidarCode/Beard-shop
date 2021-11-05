import React from 'react';
import style from "./Logos.module.css"
import persion from "../images/images.jpg"
import razavi from "../images/images (1).jpg"
import cake from "../images/cake.jpg"



const Logos = () => {
    return (
        <div className = {style.container}>
            <h3>companies</h3>
            <div>
                <img src ={persion}/>
                <img src ={razavi}/>
                <img src ={cake}/>
            </div>
            
        </div>
    );
};

export default Logos;