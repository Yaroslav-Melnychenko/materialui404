import React, { Component } from 'react';
import Item from '../item/item';
import './pallete.scss';

class Pallete extends Component {

  render(){
    return(
      <div className="pallete-container">
        {
          this.props.colors.map((color, i) => <Item key={i} color={color} selectColor={this.props.selectColor} />)
        }
      </div>
    );
  }

}
export default Pallete;
