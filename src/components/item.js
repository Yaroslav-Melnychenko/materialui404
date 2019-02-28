import React, { Component } from 'react';

class Item extends Component {

  render(){
    return(
      <span
        className="colorpaletteitem-component"
        style={{
          backgroundColor: this.props.color.code
        }}
      ></span>
    );
  }

}
export default Item;
