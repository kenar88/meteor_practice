import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
    render () {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
                </div>                
            </div>
        );
    }
};

TitleBar.PropTypes = {
    title: PropTypes.string,
};

export default TitleBar;