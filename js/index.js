let slidesParentDiv = document.querySelector('.slides');
let slides = document.querySelectorAll('.slide');
let currentSlide = document.querySelector('.slide.show');

var slideCounter = document.querySelector('.counter');
var leftBtn = document.querySelector('#left-btn');
var rightBtn = document.querySelector('#right-btn');

let presentationArea = document.querySelector('#presentation-area');
var fullScreenBtn = document.querySelector('#full-screen');
var smallScreenBtn = document.querySelector('#small-screen');

var screenStatus = 0; // screen orientation mode. 0 full screen,1 small screen
var currentSlideNo = 1 // current slide number
var totalSides = 0;

leftBtn.addEventListener('click', moveToLeftSlide);
rightBtn.addEventListener('click', moveToRightSlide);
 
fullScreenBtn.addEventListener('click', fullScreenMode);
smallScreenBtn.addEventListener('click', smallScreenMode);

init();
 
function init() {
 
  getCurrentSlideNo();
  totalSides = slides.length
  setSlideNo();
  hideLeftButton();
  hideRightButton();
}



function moveToLeftSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.previousElementSibling;
  tempSlide.classList.remove('show');
  currentSlide.classList.add('show');
  init();
}
 
function moveToRightSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.nextElementSibling;
  tempSlide.classList.remove('show');
  currentSlide.classList.add('show');
  init();
}

function fullScreenMode() {
  presentationArea.classList.add('full-screen');
  fullScreenBtn.classList.remove('show');
  smallScreenBtn.classList.add('show');
 
  screenStatus = 1;
}
 
function smallScreenMode() {
  presentationController.classList.remove('full-screen');
  fullScreenBtn.classList.add('show');
  smallScreenBtn.classList.remove('show');
 
  screenStatus = 0;
}

function hideLeftButton() {
  if(currentSlideNo == 1) {
    toLeftBtn.classList.remove('show');
  } else {
    toLeftBtn.classList.add('show');
  }
}
 
function hideRightButton() {
  if(currentSlideNo === totalSides) {
    toRightBtn.classList.remove('show');
  } else {
    toRightBtn.classList.add('show');
  }
}

function getCurrentSlideNo() {
  let counter = 0;
 
  slides.forEach((slide, i) => {
    counter++
 
    if(slide.classList.contains('show')){
      currentSlideNo = counter;
    }
  });
 
}

function setSlideNo() {
  slideNumber.innerText = `${currentSlideNo} of ${totalSides}`
}



