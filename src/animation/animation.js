import React, { Component } from 'react';

export default function(number, numberTwo, isChecked, customColors) {

  var circle = document.getElementsByClassName("circle");
  var timeline1 = new TimelineMax({repeat: -1});

  var colorPalet = [];
  var colorPalet2 = ["533747", "5F506B", "6A6B83", "76949F", "86BBBD"]
  var colorPalet3 = ["D8DBE2", "A9BCD0", "472E74", "58A4B0", "373F51", "DAA49A"]


for (var color of customColors.customColors) {
colorPalet.push(color);
};

var colorPaletLength = colorPalet.length;


  var changeColor = number + numberTwo;

  timeline1.to(circle, number, {css:{scaleX:"1", scaleY:"1"}, ease: Expo.easeInOut});
  timeline1.to(circle, numberTwo, {css:{scaleX:"0.02", scaleY:"0.02"}, ease: Expo.easeInOut});

  var ctx = document.getElementsByClassName("main-container");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function update(){
switch(isChecked.customON){
  case "false":
  return colorPalet3[getRandomArbitrary(0,6)];
  case true:
  return colorPalet[getRandomArbitrary(0,colorPaletLength)];
}
}

  //returns a random integer in a range
function random(min, max) {
    return (min + Math.random() * (max - min) + 0.5) | 0;
}

tweenToRandomColor();
  function tweenToRandomColor() {

      TweenLite.to(circle, changeColor, {css:{backgroundColor:"rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) + ")"}, onComplete:tweenToRandomColor});
  }
console.log(isChecked);
if (isChecked.bgON) {

  function randomBG(min, max) {
    return (min + Math.random() * (max - min) + 0.5) | 0;
  }

tweenToRandomColorBG();
console.log(update());
  function tweenToRandomColorBG() {
    TweenLite.to(ctx, 10, {css:{backgroundColor:"#" + update() + "" }, onUpdate:update, onComplete:tweenToRandomColorBG});
  }

}

};
