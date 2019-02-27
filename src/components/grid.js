import React, { Component } from 'react';
import Line from './line';

class Grid extends Component {

  constructor() {
    super();
    this.lines = [
      {
        saturation: 90,
        lightness: 50
      }
    ];
    for (let i = 1; i < 10; i++) {
      this.lines.push({
        saturation: this.lines[i-1].saturation - 10,
        lightness: this.lines[i-1].lightness + 2
      });
    }
  }

  render() {
    return(
      <table className="palette">
        <tbody>
          {
            this.lines.map((line, i) => {
              return <Line key={i} saturation={line.saturation} lightness={line.lightness} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Grid;
