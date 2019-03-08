import React, { Component } from 'react';
import ProjectLeft from '../components/ProjectLeft';
import ProjectRight from '../components/ProjectRight';
import memojiVid from '../images/Memoji.mov';

const contentful = require('contentful');
const client = contentful.createClient({
    space: 'wggj87juntcu',
    accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
    environment: 'master'
});

class Home extends Component {

    constructor() {
        super()
        this.state = { projects: [] }
    }

    componentDidMount() {
        client.getEntries({ content_type: 'project', order: 'sys.createdAt' })
            .then((response) => {
                this.setState({ projects: response.items });
            })
            .catch(console.error)
    }

    render() {
        return (
            <main>
                <div className="morph-wrap">
                    <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
                        <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
                        />
                    </svg>
                </div>
                <div className="content-wrap top-header">
                    <video autoPlay loop muted src={memojiVid} />
                    <h1>Hello. I’m <span id="name">Ariana Machado</span>, <br />a Product Designer with a <br />curious mind and a passion <br />for
          simple solutions.</h1>
                    <div id="scrollDown">
                        <div className="scroller"></div>
                    </div>
                </div>
                {
                    this.state.projects.length &&

                    this.state.projects.map((item, key) => {
                        if (key % 2) {
                            return (
                                <ProjectRight
                                    key={`item-${key}`}
                                    title={item.fields.title}
                                    subtitle={item.fields.subtitle}
                                    image={item.fields.mainImage.fields.file.url}
                                />)
                        } else {
                            return (
                                <ProjectLeft
                                    key={`item-${key}`}
                                    title={item.fields.title}
                                    subtitle={item.fields.subtitle}
                                    image={item.fields.mainImage.fields.file.url}
                                />)
                        }
                    })}

                <section className="content content--related footer">

                </section>
            </main >
        );
    }
}

export default Home;
