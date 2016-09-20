import React, { Component } from 'react';
import { connect } from 'react-redux';
import animate from '../animation/animation';

class Circle extends Component {
  takeNumber(){
    console.log(number);
    console.log(numberTwo);
  var number = this.props.breath;
  var numberTwo = this.props.outBreath;
  // console.log(this.state.breath, this.state.outBreath);
  animate(number, numberTwo)

}

constructor() {
  super();
  this.state = {
    // breath: 3,
    // outBreath: 3
  }
  setTimeout(this.takeNumber.bind(this), 500);

}

render(){
  return (
    <div className="circle">

    </div>

  );
}
clickstuff() {

animate();
}
}


function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside initial.js
  return {
      breath: state.breath.inBreath,
      outBreath: state.outBreath.outBreath
  };
}

export default connect(mapStateToProps)(Circle);
