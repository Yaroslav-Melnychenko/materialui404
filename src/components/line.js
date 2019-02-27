import React, { Component } from 'react';
import Item from './item';

class Line extends Component {
  constructor(props){
    super(props);
    this.hsl = [];
  }

  createHsl() {
    for ( let i = 0; i <= 360; i = i + 20 ) {
      this.hsl.push(i);
    }
  }

  render() {
    {this.createHsl()}
    return(
      <tr>
        {
          this.hsl.map((color, i) => {
            return <Item key={i} style={{backgroundColor: `hsl(${color}, ${this.props.saturation}%, ${this.props.lightness}%)`}} />
          })
        }
      </tr>
    );
  }
}

export default Line;
