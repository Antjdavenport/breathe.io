import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioOne from '../audio/audioPlayer';
import AudioTwo from '../audio/audioPlayerTwo';
import AudioThree from '../audio/audioPlayerThree';
import AudioFour from '../audio/audioPlayerFour';
import AudioFive from '../audio/audioPlayerFive';
import AudioSix from '../audio/audioPlayerSix';
import AudioSeven from '../audio/audioPlayerSeven';
import AudioEight from '../audio/audioPlayerEight';
import Animate from '../animation/animation'
import { Link } from "react-router";

var audio = ['./audio/water.wav']

class audioContainer extends Component {
  constructor(){
    super()
    this.state = {
      foo: null
    }

    this.stopAnimation = this.stopAnimation.bind(this);
  }

  stopAnimation(){
    this.setState({foo: "bar"});
    timeline1.kill();

  }

  close(){
    var audioContainer = document.getElementsByClassName('audioContainer');
    var width = "-" + $(audioContainer).width();
    TweenMax.to(audioContainer, 0.5, {css:{left: width}, ease: Power2.easeInOut});
  }

  render(){
    return (
      <div className="audioContainer" >
        <div className="audioList">
          <div className="audioComponents">
            <AudioOne />
            <AudioTwo />
            <AudioThree />
            <AudioEight />
            </div>
          <div className="audioComponents">
            <AudioFour />
            <AudioFive />
            <AudioSix />
            <AudioSeven />
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.close} className="btn btn-secondary">Close sidebar</button>
          <Link to="/" onClick={this.stopAnimation} className="btn btn-secondary">Reset</Link>
        </div>
      </div>
    )
  }
}

export default audioContainer;
