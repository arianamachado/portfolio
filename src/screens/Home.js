import React, { Component } from 'react';
import Nav from '../components/Nav';
import ProjectLeft from '../components/ProjectLeft';
import ProjectRight from '../components/ProjectRight';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: this.props.projects
        }
    }

    render() {
        let project = this.state.projects
        console.log(project[0].fields.mainImage.fields.file.url)
        return (
            < main >
                <Nav />
                <div className="morph-wrap">
                    <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
                        <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"
                        />
                    </svg>
                </div>
                <div className="content-wrap top-header">
                    <video autoPlay loop muted>
                        <source src="../images/Memoji.mov" type="video/mov" />
                    </video>
                    <h1>Hello. I’m <span id="name">Ariana Machado</span>, <br />a Product Designer with a <br />curious mind and a passion <br />for
          simple solutions.</h1>
                    <div id="scrollDown">
                        <div className="scroller"></div>
                    </div>
                </div>
                <ProjectLeft
                    title={project[0].fields.title}
                    subtitle={project[0].fields.subtitle}
                    image={project[0].fields.mainImage.fields.file.url}
                />
                <ProjectRight
                    title={project[1].fields.title}
                    subtitle={project[1].fields.subtitle}
                    image={project[1].fields.mainImage.fields.file.url}
                />
                <ProjectLeft
                    title={project[2].fields.title}
                    subtitle={project[2].fields.subtitle}
                    image={project[2].fields.mainImage.fields.file.url}
                />
                <ProjectRight
                    title={project[3].fields.title}
                    subtitle={project[3].fields.subtitle}
                    image={project[3].fields.mainImage.fields.file.url}
                />
                <ProjectLeft
                    title={project[4].fields.title}
                    subtitle={project[4].fields.subtitle}
                    image={project[4].fields.mainImage.fields.file.url}
                />
                <section className="content content--related">

                </section>
            </main >
        );
    }
}

export default Home;
