import React, { Component } from 'react';
import Nav from '../components/Nav';
import Masonry from 'react-masonry-component';

// Connect to contentful database
const contentful = require('contentful');
const client = contentful.createClient({
    space: 'wggj87juntcu',
    accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
    environment: 'master'
});

// Options for masonry (the tile layout)
const masonryOptions = {
    transitionDuration: 0
};

class Play extends Component {

    constructor(props) {
        super(props)
        this.state = { play: [] }

        // Get entries from contentful
        client.getEntries({ content_type: 'play', order: 'sys.createdAt' })
            .then((response) => {
                this.setState({ play: response.items });
            })
            .catch(console.error)

    }

    render() {

        return (
            < main>
                <h1 id="pageTitle">Play</h1>
                <div id="playGallery">
                    <Masonry
                        className={'items'}
                        elementType={'ul'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                    >
                        {// Loop through the entries and add them to the page
                            this.state.play.length &&
                            this.state.play.map((item, key) => {
                                return (
                                    <li key={`item-${key}`} className="playItem">
                                        <img src={item.fields.image.fields.file.url} />
                                    </li>)
                            })}
                    </Masonry>
                </div>
            </main >
        );
    }
}

export default Play;
