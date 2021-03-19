import React from 'react';
import '../styles/main.scss'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/"><h1>Philosophy</h1></NavLink>
        </div>
    )
}

export default Header