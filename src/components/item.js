import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Item extends Component {

  render(){
    return(
      <CSSTransitionGroup
        transitionName="example"
      >
        <span
          className="colorpaletteitem-component"
          style={{
            backgroundColor: this.props.color.code
          }}
        />
      </CSSTransitionGroup>
    );
  }

}
export default Item;
