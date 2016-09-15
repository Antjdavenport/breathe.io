import React, { Component } from 'react';
import Circle from './circle';
import Initial from '../pages/initial';
import AppStore from '../store/AppStore';


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      // title: "adf",
      store: AppStore.getAll(),
      title: "heok"

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
      <div className="center-box"><Circle /></div>

    );
  }
}
