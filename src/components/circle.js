import React, { Component } from 'react';

class Circle extends Component {
  takeNumber(){
  var number = this.props.title;
  console.log(this.props.title);
  animate(number)
  return number;
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
export default Circle;

// console.log({this.props.name});
var animate = function(number) {

var circle = document.getElementsByClassName("circle");
var timeline1 = new TimelineMax({repeat: 5});
// var number = number;
timeline1.to(circle, number, {scaleX:1.5, scaleY:1.5, ease: Power2.easeInOut});
timeline1.to(circle, number, {scaleX:0.2, scaleY:0.2, ease: Power2.easeInOut});

};
