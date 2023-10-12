import { NavLink } from "react-router-dom";
import React,{useState} from "react";

import "./navbar.css"
const Navbar=()=>{
    const [navbar,setNavbar]=useState(false);
    const ChangeBg=()=>{
        if(window.scrollY >= 100){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };

    window.addEventListener("scroll",ChangeBg);

    return(
        <div>
            <nav className={
               navbar 
            ?"navbar navbar-expand-sm fixed-top active"
            :"navbar navbar-expand-sm fixed-top" 
        }>
                <NavLink to='/' className="navbar-brand">
                    <span>Fitness</span> Guide
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/workout' className="nav-link">Workouts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/product' className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/account' className="nav-link">Account</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;