import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import Play from './screens/Play';
import Nav from './components/Nav';
import {
  Route,
  HashRouter
} from "react-router-dom";


// const contentful = require('contentful');
// const client = contentful.createClient({
//   space: 'wggj87juntcu',
//   accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
//   environment: 'master'
// });

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     projects: []
  //   }

  //   client.getEntries({ content_type: 'project', order: 'sys.createdAt' })
  //     .then((response) => {
  //       let projects = [];
  //       response.items.forEach((item, key) => {
  //         projects.push(
  //           item
  //         )
  //       });
  //       this.setState({ projects });
  //     })
  //     .catch(console.error)

  // }

  render() {
    return (
      <HashRouter>
        <main className="App">
          <Nav />
          {/* <Route path="/" render={(projects) => (<Home projects={this.state.projects} />)} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/play" component={Play} />
        </main>
      </HashRouter>
    );
  }
}

export default App;
