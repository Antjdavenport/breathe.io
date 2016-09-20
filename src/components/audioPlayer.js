import React, { Component } from 'react';
import { connect } from 'react-redux';


var sound = new Howl({
  src: ['./audio/water.wav']
  });


class audioPlayerOne extends Component {

constructor(){
  super()

  this.state = {
    playing: "false"
  }

  this.playSound = this.playSound.bind(this);
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

  render(){


    return (
      <div
        className="audioPlayerOne" >
        <label>water</label>

        {this.audioLabel()}

      </div>
    )
  }
}

export default audioPlayerOne;
