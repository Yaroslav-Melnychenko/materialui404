import React, { Component } from 'react';
import Header from './header/header';
import Pallete from './pallete';
import randomColor from 'randomcolor';

class Main extends Component {

  constructor(){
    super();
    this.colors = [];
  }

  updateColors(){
    for (let i = 0; i < 90; i++) {
			let color = randomColor();
			this.colors.push({
				code: color,
				selected: false,
				hovered: false
			});
		};
		this.state = {
			colors: this.colors,
			multiselect: true,
			isIdle: false
		};
  }

  render() {
    {this.updateColors()}
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-7">
            <div className="panel-heading">
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={this.updateColors.bind(this)}
              >New colors</button>
            </div>
            <Pallete colors={this.state.colors} />
          </div>
          <div className="col-md-5">
            instruments
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
