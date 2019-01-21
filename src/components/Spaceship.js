// Code The Spaceship Component Here
import React, { Component } from 'react';

class Spaceship extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>Speed: {this.props.speed}</h3>
                <h3>Has Rockets? {this.props.hasRockets ? "Yes" : "No"}</h3>
                <h3>Colors: {this.props.colors.join(', ')}</h3>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;
