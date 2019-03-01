import React, { Component } from 'react';
import './item.scss';

class Item extends Component {

  render(){
    const cssClass = this.props.color.selected ? 'colorpaletteitem-component selected' : 'colorpaletteitem-component';
    return(
      <span
        className={cssClass}
        onClick={this.props.selectColor.bind(this, this.props.color.id)}
        style={{
          backgroundColor: this.props.color.code
        }}
      />
    );
  }

}
export default Item;