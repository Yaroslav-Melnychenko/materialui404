import React, { Component } from 'react';
import Selected from './selected';
import './instruments.scss';

class Instruments extends Component {

    render(){
      return(
        <div className="color-panel-container">
            <div className="panel-heading">
                Selected colors
            </div>
            <div className="color-panel">
              {
                this.props.colors.map((color, i) => <Selected key={i} color={color} />)
              }
            </div>
        </div>
      );
    }
  
  }
  export default Instruments;