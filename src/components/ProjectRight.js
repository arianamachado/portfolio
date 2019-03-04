import React, { Component } from 'react';

class ProjectRight extends Component {
    render() {
        return (
            <div className="content-wrap layout--2">
                <div className="content content--layout content--layout-2">
                    <h3 className="content__title wow fadeInDown">{this.props.title}</h3>
                    <p className="content__desc wow fadeInDown">{this.props.subtitle}</p>
                    <h6 className="content__link wow fadeInDown">MORE DETAILS<i className="fas fa-long-arrow-alt-right arrow "></i></h6>
                </div>
                <div>
                    <img className="content__img" src={this.props.image} alt="Some image" />
                </div>
            </div>
        );
    }
}

export default ProjectRight;
