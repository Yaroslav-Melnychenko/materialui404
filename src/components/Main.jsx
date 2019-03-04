import React, { Component } from 'react';
import randomColor from 'randomcolor';
import uniqid from 'uniqid';
import Header from './Header/Header';
import Pallete from './Pallete/Pallete';
import Instruments from './Instruments/Instruments';

class Main extends Component {
  constructor() {
    super();
    this.audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3');
    const colors = [];
    for (let i = 0; i < 90; i += 1) {
      const color = randomColor();
      colors.push({
        id: uniqid(),
        code: color,
        selected: false,
      });
    }
    this.state = {
      colors,
      playButton: 'Play',
      playing: false,
    };
    this.selectColor = this.selectColor.bind(this);
  }

  getSelectedColors() {
    const { colors } = this.state;
    return colors.filter(color => color.selected);
  }

  updateColors() {
    const colors = [];
    for (let i = 0; i < 90; i += 1) {
      const color = randomColor();
      colors.push({
        id: uniqid(),
        code: color,
        selected: false,
      });
    }
    this.setState({ colors });
  }

  selectColor(id) {
    const { colors } = this.state;
    const selected = colors.find(color => color.id === id);
    selected.selected = true;
    this.setState(prevState => prevState);
  }

  mixColors() {
    const { colors } = this.state;
    colors.sort(() => Math.random() - 0.5);
    this.setState({ colors });
  }

  playMusic() {
    const { playing } = this.state;
    if (!playing) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.setState(prevState => ({
      colors: prevState.colors,
      playButton: prevState.playButton === 'Play' ? 'Stop' : 'Play',
      playing: !prevState.playing,
    }));
  }

  render() {
    const selectedColors = this.getSelectedColors();
    const { colors } = this.state;
    const { playButton } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
        <div className="col-md-7">
          <div className="panel-heading">
            <button type="button" className="btn btn-info btn-sm" onClick={this.updateColors.bind(this)}>Reset</button>
            <button type="button" className="btn btn-info btn-sm ml-2" onClick={this.mixColors.bind(this)}>Mix colors</button>
            <button type="button" className="btn btn-info btn-sm ml-2" onClick={this.playMusic.bind(this)}>
              {playButton} music
            </button>
          </div>
          <Pallete colors={colors} selectColor={this.selectColor} />
        </div>
        <div className="col-md-5">
          <Instruments colors={selectedColors} />
        </div>
      </div>
    );
  }
}
export default Main;
