import React, { Component } from 'react';
import randomColor from 'randomcolor';
// import uniqid from 'uniqid';
import Header from './header/header';
import Pallete from './pallete/pallete';
import Instruments from './instruments/instruments';

class Main extends Component {
  constructor() {
    super();
    this.audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
		const colors = [];
		for(let i = 0; i < 90; i++) {
			const color = randomColor();
			colors.push({
        id: i,
				code: color,
        selected: false
			});
		};
		this.state = {
      colors: colors,
      playButton: 'Play',
      playing: false
    };
    this.selectColor = this.selectColor.bind(this);
  }

  getSelectedColors() {
		return this.state.colors.filter(color => color.selected);
	}
  
  updateColors(){
    const colors = [];
    for(let i = 0; i < 90; i++) {
			const color = randomColor();
			colors.push({
        id: i,
				code: color,
				selected: false
			});
    };
    this.setState({colors: colors});
  }

  selectColor(id){
    let selectedIndex = 0;
    const selected = this.state.colors.find((color, index) => {
      selectedIndex = index;
      return color.id === id;
    });
    selected.selected = true;
    const colorsArr = this.state.colors;
    colorsArr.splice(selectedIndex, 1, selected);
    this.setState({colors: colorsArr});
  }

  mixColors(){
    const colors = this.state.colors;
    colors.sort(() => Math.random() - 0.5);
    this.setState({colors: colors});
  }

  playMusic(){
    if(!this.state.playing){
      this.audio.play();
    }else{
      this.audio.pause();
    }
    this.setState({
      colors: this.state.colors,
      playButton: this.state.playButton === 'Play' ? 'Stop' : 'Play',
      playing: !this.state.playing
    });
  }

  render() {
    const colors = this.getSelectedColors();
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
              >Reset
              </button>
              <button 
                type="button"
                className="btn btn-info btn-sm ml-2"
                onClick={this.mixColors.bind(this)}
              >Mix colors
              </button>
              <button 
                type="button"
                className="btn btn-info btn-sm ml-2"
                onClick={this.playMusic.bind(this)}
              >{this.state.playButton} music
              </button>
            </div>
            <Pallete colors={this.state.colors} selectColor={this.selectColor} />
          </div>
          <div className="col-md-5">
            <Instruments colors={colors} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
