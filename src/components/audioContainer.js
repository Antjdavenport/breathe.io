import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioOne from './audioPlayer';
import AudioTwo from './audioPlayerTwo';
import AudioThree from './audioPlayerThree';
import Animate from '../animation/animation'
import { Link } from "react-router";

class audioContainer extends Component {
  constructor(){
    super()
    this.state = {
      foo: null
    }

    this.stopAnimation = this.stopAnimation.bind(this);
  }

  stopAnimation(){
    console.log('asd');
    this.setState({foo: "bar"});
    timeline1.kill();

  }

  render(){
    return (
      <div
        className="audioContainer" >
        <AudioOne />
        <AudioTwo />
        <AudioThree />
          <Link to="/" type="submit" onClick={this.stopAnimation} className="btn btn-primary">Back</Link>
      </div>
    )
  }
}

export default audioContainer;
