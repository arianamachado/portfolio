import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
class Nav extends Component {
    render() {
        // This is the navigation that will appear on all pages
        return (
            <nav id="mainnav">
                <NavLink className="navLink" to="/"><img id="logo" src={require('../images/logo.png')} alt="Ariana Machado's logo" /></NavLink>
                <span className="topline" id="rightline"></span>
                <NavLink className="navLink" id="about" to="/">ABOUT</NavLink>
                <span className="divider" id="lineone"></span>
                <NavLink className="navLink" id="work" to="/">WORK</NavLink>
                <span className="topline" id="leftline"></span>
                <NavLink className="navLink" id="play" to="/play">PLAY</NavLink>
                <span className="divider" id="linetwo"></span>
                <NavLink className="navLink" id="contact" to="/">CONTACT</NavLink>

            </nav>
        );
    }
}

export default Nav;
