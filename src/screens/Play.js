import React, { Component } from 'react';
import Nav from '../components/Nav';

const contentful = require('contentful');
const client = contentful.createClient({
    space: 'wggj87juntcu',
    accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
    environment: 'master'
});

class Play extends Component {

    constructor(props) {
        super(props)
        this.state = { play: [] }

        client.getEntries({ content_type: 'play', order: 'sys.createdAt' })
            .then((response) => {
                this.setState({ play: response.items });
            })
            .catch(console.error)

    }

    render() {
        // console.log(play)
        return (
            < main >
                <h1 id="pageTitle">Play</h1>

            </main >
        );
    }
}

export default Play;
