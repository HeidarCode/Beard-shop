import React from "react";
import styles from "./Banner.module.css"
import image from "../images/Banner.jpg"


const Banner= () => {

    return(   
           <div className = {styles.container}>
           <img src = {image}  alt="banner"/>
           
           <div className = {styles.textContainer}>
            
                <h1>Beard Shop</h1>
               <p>
                   Golden Wheat<span>Store</span>
               </p> 

           </div>
          

           </div>
        
    )
}
export default Banner