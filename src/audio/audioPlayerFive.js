import React, { Component } from 'react';
import { connect } from 'react-redux';

var volume = 0.5;
var sound = new Howl({
  src: ['./audio/crystalC.mp3'],
    loop: true,
    volume: volume
  });




class audioPlayerFive extends Component {

constructor(){
  super()

  this.state = {
    playing: "false",
    slider: ''
  }

  this.playSound = this.playSound.bind(this);
  this.handleChange = this.handleChange.bind(this);

}

playSound(){
  if (this.state.playing === "false") {
    sound.play()
    this.setState({playing: "true"});
  }
  else {
    sound.stop();
    this.setState({playing: "false"});
  }
}

audioLabel(){
  return (
    <label className="switch" onChange={this.playSound}>
      {this.audioInput()}
      {this.audioSlider()}
    </label>
    )
}

audioInput(){
  return (
    <input type="checkbox" ></input>
  )
}

audioSlider(){

  return (
    <div className="slider round"></div>
  )

}

handleChange(event){

  this.setState({slider: event.target.value});
  volume = event.target.value / 100;
  sound.volume(volume);
}

  render(){


    return (
      <div
        className="audioPlayerOne" >
        <label>bowl #C</label>
        {this.audioLabel()}
        <input type="range" min="0" max="100" value={this.state.slider} step="10" onChange={this.handleChange} />
      </div>
    )
  }
}

export default audioPlayerFive;
