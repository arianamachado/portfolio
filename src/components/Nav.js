import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav id="mainnav">
                <img id="logo" src={require('../images/logo.png')} alt="Ariana Machado's logo" />
                <span className="topline" id="rightline"></span>
                <a id="about" href="">ABOUT</a>
                <span className="divider" id="lineone"></span>
                <a id="work" href="">WORK</a>
                <span className="topline" id="leftline"></span>
                <a id="play" href="">PLAY</a>
                <span className="divider" id="linetwo"></span>
                <a id="contact" href="">CONTACT</a>
            </nav>
        );
    }
}

export default Nav;
