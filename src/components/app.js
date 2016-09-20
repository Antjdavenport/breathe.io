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
      className="container"
        >
        <Text />
        <Circle />
  <AudioContainer />
      </div>


    );
  }
}
