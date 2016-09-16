import React, { Component } from 'react';
import { connect } from 'react-redux';

class Circle extends Component {
  takeNumber(){
  var number = this.props.breath;
  var numberTwo = this.props.outBreath;
  console.log(this.props.breath, this.props.outBreath);
  animate(number, numberTwo)

}

constructor() {
  super();

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

// console.log({this.props.name});
var animate = function(number, numberTwo) {

var circle = document.getElementsByClassName("circle");
var timeline1 = new TimelineMax({repeat: 5});
// var number = number;
timeline1.to(circle, number, {scaleX:1.5, scaleY:1.5, ease: Power2.easeInOut});
timeline1.to(circle, numberTwo, {scaleX:0.2, scaleY:0.2, ease: Power2.easeInOut});

};
