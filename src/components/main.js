import React, { Component } from 'react';
import randomColor from 'randomcolor';
// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from './header/header';
import Pallete from './pallete';

class Main extends Component {

  state = {}

  constructor() {
		super();
		const colors = [];
		for(let i = 0; i < 90; i++) {
			const color = randomColor();
			colors.push({
				code: color,
				selected: false,
				hovered: false
			});
		};
		this.state = {
			colors: colors,
			// multiselect: true,
			// isIdle: false
		};
  }
  
  updateColors(){
    const colors = [];
    for(let i = 0; i < 90; i++) {
			const color = randomColor();
			colors.push({
				code: color,
				selected: false,
				hovered: false
			});
    };
    this.setState({colors: colors});
  }

  render() {
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
              >New colors
              </button>
            </div>
            <Pallete colors={this.state.colors} />
          </div>
          <div className="col-md-5">instruments</div>
        </div>
      </div>
    );
  }
}

export default Main;
