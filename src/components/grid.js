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
    row: 12,
    lines: 12,
    colorStep: 20
  }

  constructor() {
    super();

    let palleteArray = [];
    for (let y = 0; y < this.state.lines; y++) {
      palleteArray.push()
      for () {

      }
    }


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
