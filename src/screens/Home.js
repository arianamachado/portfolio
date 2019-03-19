import React, { Component } from 'react';
import memojiVid from '../images/Memoji.mov';

// // Connect to contentful
// const contentful = require('contentful');
// const client = contentful.createClient({
//     space: 'wggj87juntcu',
//     accessToken: 'b525b139f2770ef4271f4ccc34f25157046984642a87138b55c1ac003d1fa4dc',
//     environment: 'master'
// });

class Home extends Component {

    constructor() {
        super()
        this.state = { projects: [] }
    }

    // // Get entries from contentful 
    // componentDidMount() {
    //     client.getEntries({ content_type: 'project', order: 'sys.createdAt' })
    //         .then((response) => {
    //             this.setState({ projects: response.items });
    //         })
    //         .catch(console.error)
    // }

    render() {
        console.log(this.state.projects[0])
        return (
            <main>
                <div className="morph-wrap">
                    <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
                        <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
                            fill="#00D6CE" />
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
                <div className="content-wrap">
                    <div className="layout--1">
                        <div>
                            <img className="content__img" src={require('../images/5.png')} alt="Some image" />
                        </div>
                        <div className="content content--layout content--layout-1">
                            <h3 className="content__title wow fadeInDown">CTI Mobile App</h3>
                            <p className="content__desc wow fadeInDown">The Barrett Centre for Technology Innovation</p>
                            <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                        </div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="layout--2">
                        <div className="content content--layout content--layout-2">
                            <h3 className="content__title wow fadeInDown">Humber HR</h3>
                            <p className="content__desc wow fadeInDown">A must needed redesign</p>
                            <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                        </div>
                        <div>
                            <img className="content__img" src={require('../images/3.png')} alt="Some image" />
                        </div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="layout--1">
                        <div>
                            <img className="content__img" src={require('../images/4.png')} alt="Some image" />
                        </div>
                        <div className="content content--layout content--layout-1">
                            <h3 className="content__title wow fadeInDown">olive Mobile App</h3>
                            <p className="content__desc wow fadeInDown">A take out app for dining in</p>
                            <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                        </div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="layout--2">
                        <div className="content content--layout content--layout-2">
                            <h3 className="content__title wow fadeInDown">Fuse iOS App</h3>
                            <p className="content__desc wow fadeInDown">A carpooling app for students</p>
                            <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                        </div>
                        <div>
                            <img className="content__img" src={require('../images/2.png')} alt="Some image" />
                        </div>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="layout--1">
                        <div>
                            <img className="content__img" src={require('../images/1.png')} alt="Some image" />
                        </div>
                        <div className="content content--layout content--layout-2">
                            <h3 className="content__title wow fadeInDown">Goodlife Fitness iOS App</h3>
                            <p className="content__desc wow fadeInDown">A must needed redesign</p>
                            <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                        </div>
                    </div>
                </div>
                {/* {
                    //Loop through the entries and add them to the page, alternating between ProjectRight and ProjectLeft
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
                    })} */}
                <section className="footer">

                </section>
            </main >
        );
    }
}

export default Home;
