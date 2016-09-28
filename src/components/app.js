import React, { Component } from 'react';
import Circle from './circle';
import Initial from '../pages/initial';
import AppStore from '../store/AppStore';
import AudioContainer from './audioContainer';
import Text from './text';



export default class App extends React.Component {



  constructor() {
    super();

    this.state = {
      // title: "adf",
      store: AppStore.getAll(),


    };

}

open() {
    var audioContainer = document.getElementsByClassName('audioContainer')
    $(audioContainer).animate({left: 0}, 200);

  }




// componentsWillMount() {
//   AppStore.on("change", () => {
//     this.setState({
//       store: AppStore.getAll(),
//     })
//   });
// }

  render() {
    return (
      <div
      className="app-container"
        >
        <Circle />
        <AudioContainer />
        <div
        className="openBtn">

        <h1><span className="tag tag-default" onClick={this.open}>Options</span></h1>

        </div>
          </div>


    );
  }
}
