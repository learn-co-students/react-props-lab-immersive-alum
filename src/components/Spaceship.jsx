// Code The Spaceship Component Here
import React from 'react'

const Spaceship = props =>
  <div>
    <p>{props.name}</p>
    <p>{props.speed}</p>
    <p>{props.hashRockets}</p>
    <p>{props.colors.join(', ')}</p>
  </div>

Spaceship.defaultProps = {
  name: 'n/a',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
