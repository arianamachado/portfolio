import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';
import ProjectLeft from './components/ProjectLeft';
import ProjectRight from './components/ProjectRight';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <div className="morph-wrap">
          <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
            <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
            />
          </svg>
        </div>
        <div className="content-wrap top-header">
          <video autoplay loop muted>
            <source src="img/Memoji.mov" />
          </video>
          <h1>Hello. I’m <span id="name">Ariana Machado</span>, <br />a Product Designer with a <br />curious mind and a passion <br />for
          simple solutions.</h1>
          <div id="scrollDown">
            <div className="scroller"></div>
          </div>
        </div>
        <ProjectLeft
          title="Goodlife Fitness Redesign"
          subtitle="A must needed redesign"
          image={require('./images/1.png')}
        />
        <ProjectRight
          title="Fuse"
          subtitle="A carpooling app for students"
          image={require('./images/2.png')}
        />
        <ProjectLeft
          title="Humber College HR"
          subtitle="A must needed redesign"
          image={require('./images/3.png')}
        />
        <ProjectRight
          title="olive iOS App"
          subtitle="A take out app for dining in"
          image={require('./images/4.png')}
        />
        <ProjectLeft
          title="CTI Building mobile app"
          subtitle="The Barrett Centre for Technology Innovation"
          image={require('./images/5.png')}
        />
        <section className="content content--related">

        </section>
      </main>
    );
  }
}

export default App;
