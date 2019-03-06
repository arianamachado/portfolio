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
        this.state = {}

        client.getEntries({ content_type: 'play', order: 'sys.createdAt' })
            .then((response) => {
                let play = [];
                response.items.forEach((item, key) => {
                    play.push(
                        item
                    )
                });
                this.setState({ play });
            })
            .catch(console.error)

    }

    render() {
        let play = this.state.play
        console.log(play)
        return (
            < main >
                <Nav />

            </main >
        );
    }
}

export default Play;
