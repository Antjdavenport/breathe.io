import React, { Component } from 'react';
import { connect } from 'react-redux';


var soundTwo = new Howl({
  src: ['./audio/crystalbowl.wav']
  });


class audioPlayerTwo extends Component {

constructor(){
  super()

  this.state = {
    playing: "false"
  }

  this.playSound = this.playSound.bind(this);
}

playSound(){
  if (this.state.playing === "false") {
    soundTwo.play()
    this.setState({playing: "true"});
  }
  else {
    soundTwo.stop();
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

  render(){


    return (
      <div
        className="audioPlayerOne" >
        <label>bowl</label>

        {this.audioLabel()}

      </div>
    )
  }
}

export default audioPlayerTwo;
