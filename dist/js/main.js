"use strict";

var waypoint = new Waypoint({
  element: document.querySelector('.main__hero'),
  handler: function handler() {// const button = document.querySelector('.menu__button')
    // button.classList.add('bounce')  
    // console.log("trigger")
  }
});
var waypoint = new Waypoint({
  element: document.querySelector('.main__story'),
  handler: function handler() {
    var sec = document.querySelector('.main__story--copy');
    var button = document.querySelector('.menu__button');
    button.classList.add('bounce');
    sec.classList.add('slide');
    console.log("trigger-2");
  },
  offset: 30
});
var waypoint = new Waypoint({
  element: document.querySelector('.main__gallery'),
  handler: function handler() {
    var img = document.querySelector('.image');
    var imgTwo = document.querySelector('.image-4');
    var imgThree = document.querySelector('.image-5');
    var imgFour = document.querySelector('.image-8');
    img.classList.add('jump');
    imgTwo.classList.add('jump');
    imgThree.classList.add('jump');
    imgFour.classList.add('jump');
    console.log("trigger-3");
  }
});
var waypoint = new Waypoint({
  element: document.querySelector('.main__catering'),
  handler: function handler() {
    var catering = document.querySelector('.learn-more');
    catering.classList.add('shake');
    console.log("trigger-4");
  }
}); //   each waypoint = section
//# sourceMappingURL=main.js.map
