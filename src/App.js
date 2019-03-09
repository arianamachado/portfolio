import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import Play from './screens/Play';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import {
  Route,
  HashRouter
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <main className="App">
          <MobileNav />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/play" component={Play} />
        </main>
      </HashRouter>
    );
  }
}

export default App;
