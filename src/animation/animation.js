import React, { Component } from 'react';

export default function(number, numberTwo) {

  var circle = document.getElementsByClassName("circle");
  var timeline1 = new TimelineMax({repeat: -1});

  var colorPalet = ["313A75", "27566B", "472E74", "236863", "104050", "6C929F"];
  var colorPalet2 = ["533747", "5F506B", "6A6B83", "76949F", "86BBBD"]
  var colorPalet3 = ["D8DBE2", "A9BCD0", "472E74", "58A4B0", "373F51", "DAA49A"]

console.log(number);
console.log(numberTwo);

  var changeColor = number + numberTwo;

  timeline1.to(circle, number, {css:{scaleX:"2.6", scaleY:"2.6"}, ease: Expo.easeInOut});
  timeline1.to(circle, numberTwo, {css:{scaleX:"0.05", scaleY:"0.05"}, ease: Expo.easeInOut});

  var ctx = document.getElementsByClassName("main-container");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function update(){
  return colorPalet3[getRandomArbitrary(0,6)];
}

  //returns a random integer in a range
function random(min, max) {
    return (min + Math.random() * (max - min) + 0.5) | 0;
}

tweenToRandomColor();
  function tweenToRandomColor() {

    // TweenLite.to(circle, changeColor, {css:{backgroundColor:"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")"}, onComplete:tweenToRandomColor});
      TweenLite.to(circle, changeColor, {css:{backgroundColor:"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")"}, onComplete:tweenToRandomColor});
  }


  function randomBG(min, max) {
    return (min + Math.random() * (max - min) + 0.5) | 0;
  }

tweenToRandomColorBG();
  function tweenToRandomColorBG() {
    TweenLite.to(ctx, 10, {css:{backgroundColor:"#" + update() + "" }, onUpdate:update, onComplete:tweenToRandomColorBG});
  }

}




// var timeline2 = new TimelineMax({repeat: 8, yoyo:true});
//
// var newNumber = number / 3;
// console.log(newNumber);
// var newPulseNumber = ((number / 3) * 2) / 6;
// console.log(newPulseNumber);
//
//
// var pulseSeconds = 0.12;
// var pulseXY_in = 2.57;
// var pulseXY_out = 2.6;

// console.log({this.props.name});
// var animate = function(number, numberTwo) {
//
// var newNumber = number / 3;
// console.log(newNumber);
// var newPulseNumber = ((number / 3) * 2) / 6;
// console.log(newPulseNumber);
//
//
// var pulseSeconds = 0.12;
// var pulseXY_in = 2.57;
// var pulseXY_out = 2.6;
//
// var circle = document.getElementsByClassName("circle");
// var timeline1 = new TimelineMax({repeat: 5});
// // var timeline2 = new TimelineMax({repeat: 8, yoyo:true});
//
//
// // var number = number;
// timeline1.to(circle, number, {css:{backgroundColor: "#fffff", scaleX:"2.6", scaleY:"2.6"}, ease: Expo.easeInOut});
// timeline1.to(circle, numberTwo, {css:{backgroundColor:"#919191", scaleX:"0.05", scaleY:"0.05"}, ease: Expo.easeInOut});
// function pulse (){
//   console.log("pulse");
//   timeline2.to(circle, pulseSeconds, {css:{scaleX:pulseXY_in, scaleY:pulseXY_in}, ease: Power1.easeInOut});
//   // timeline2.to(circle, pulseSeconds, {css:{scaleX:pulseXY_out, scaleY:pulseXY_out}, ease: Power1.easeOut});
// };

// function backIN() {
//     console.log("backin");
//   timeline1.to(circle, numberTwo, {css:{backgroundColor:"#919191", scaleX:"0.05", scaleY:"0.05"}, ease: Power2.easeInOut});
// };

// timeline1.to(circle, pulseSeconds, {css:{scaleX:pulseXY_in, scaleY:pulseXY_in}, ease: Power1.easeIn});
// timeline1.to(circle, pulseSeconds, {css:{scaleX:pulseXY_out, scaleY:pulseXY_out}, ease: Power1.easeOut});
// timeline1.to(circle, pulseSeconds, {css:{scaleX:pulseXY_in, scaleY:pulseXY_in}, ease: Power1.easeIn});
// timeline1.to(circle, pulseSeconds, {css:{scaleX:pulseXY_out, scaleY:pulseXY_out}, ease: Power1.easeOut});





// };
