import React from "react";
import styles from "./Navbar.module.css"
import Image from "../images/Nav.jpeg";

const Navbar = () => {
    
    return(
        <div>
            <header className = {styles.header}>
                <div className = {styles.listContainer}>
                    <ul className = {styles.list}>
                        <li>Home Page</li>
                        <li>Products</li>
                        <li>About Us</li>

                    </ul>
                </div>
                <div className = {styles.logo}>
                <img src={Image} alt = "image" className = {styles.logo}/>
            </div>
            </header>
           
            
        </div>
    )
}

export default Navbar