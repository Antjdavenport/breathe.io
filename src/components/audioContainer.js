import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioOne from './audioPlayer';
import AudioTwo from './audioPlayerTwo';
import AudioThree from './audioPlayerThree';

class audioContainer extends Component {

  render(){
    return (
      <div
        className="audioContainer" >
        <AudioOne />
        <AudioTwo />
        <AudioThree />
      </div>
    )
  }
}

export default audioContainer;
