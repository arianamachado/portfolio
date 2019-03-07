import React, { Component } from 'react';
import Nav from '../components/Nav';
import Masonry from 'react-masonry-component';

const contentful = require('contentful');
const client = contentful.createClient({
    space: 'wggj87juntcu',
    accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
    environment: 'master'
});

const masonryOptions = {
    transitionDuration: 0
};

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

        // {
        //     const childElements = [];

        //     this.state.play.length &&
        //         this.state.play.map((item, key) => {
        //             childElements.push(
        //                 <li className="image-element-class">
        //                     <img src={item.fields.image.fields.file.url} />
        //                 </li>
        //             )
        //         });

        // };

        return (
            < main >
                <h1 id="pageTitle">Play</h1>
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {this.state.play.length &&

                        this.state.play.map((item, key) => {
                            return (
                                <li className="image-element-class">
                                    <img src={item.fields.image.fields.file.url} />
                                </li>)
                        })};
                </Masonry>
            </main >
        );
    }
}

export default Play;
