import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
class MobileNav extends Component {
    render() {
        // This is the navigation that will appear on smaller devices
        return (
            <nav id="mobileNav" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <NavLink className="navLink" to="/"><img id="logo" src={require('../images/logo.png')} alt="Ariana Machado's logo" /></NavLink>
                        <NavLink className="navLink" id="about" to="/">ABOUT</NavLink>
                        <NavLink className="navLink" id="work" to="/">WORK</NavLink>
                        <NavLink className="navLink" id="play" to="/play">PLAY</NavLink>
                        <NavLink className="navLink" id="contact" to="/">CONTACT</NavLink>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MobileNav;