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
  var isChecked = this.props.isChecked;
  animate(number, numberTwo, isChecked, this.props.customColors);
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
this.clickstuff = this.clickstuff.bind(this);
}



render(){
  return (
    <div className="container-circle">
    <div className="circle" onClick={this.clickstuff}>

   </div>
   </div>

  );
}
clickstuff() {
console.log(this.props.customColors.customColors[0])
// animate();
}
}


function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside initial.js



  return {
      breath: state.breath.inBreath,
      outBreath: state.outBreath.outBreath,
      isChecked: state.isChecked,
      customColors: state.customColors
  };
}

export default connect(mapStateToProps)(Circle);
