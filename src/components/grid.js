import React, { Component } from 'react';
// import Line from './line';

class Grid extends Component {

  state = {
    pallete: [
      {
        color: 0,
        saturation: 90,
        lightness: 50,
      }
    ],
    lines: 6,
    colorStep: 20
  }

  constructor() {
    super();
  }

  render() {
    return(
      <table className="palette">
        <tbody>

        </tbody>
      </table>
    );
  }
}

export default Grid;
