import React, { Component } from 'react';
import Item from './item';

class Pallete extends Component {

  render(){
    return(
      <div className="pallete-container">
        {
          this.props.colors.map((color, i) => <Item key={i} color={color} />)
        }
      </div>
    );
  }

}
export default Pallete;
