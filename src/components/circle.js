import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import animate from '../animation/animation';

class Circle extends Component {

componentDidMount() {
  console.log("mounted");
}

  takeNumber(){

  var number = this.props.breath;
  var numberTwo = this.props.outBreath;
  var bgON = this.props.bgON;
  animate(number, numberTwo, bgON);
    // console.log(canvas);
  // console.log(this.state.breath, this.state.outBreath);
  // animate(number, numberTwo, bgON, ctx)



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
    <div className="container-circle">
    <div className="circle">

   </div>
   </div>

  );
}
clickstuff() {

// animate();
}
}


function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside initial.js



  return {
      breath: state.breath.inBreath,
      outBreath: state.outBreath.outBreath,
      bgON: state.bgON
  };
}

export default connect(mapStateToProps)(Circle);
