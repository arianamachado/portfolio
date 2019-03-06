import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';

const contentful = require('contentful');
const client = contentful.createClient({
  space: 'wggj87juntcu',
  accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
  environment: 'master'
});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    client.getEntries({ content_type: 'project', order: 'sys.createdAt' })
      .then((response) => {
        let projects = [];
        response.items.forEach((item, key) => {
          projects.push(
            item
          )
        });
        this.setState({ projects });
      })
      .catch(console.error)
  }
  render() {
    return (
      <main className="App">
        {this.state.projects &&
          <Home projects={this.state.projects} />
        }
      </main>
    );
  }
}

export default App;
