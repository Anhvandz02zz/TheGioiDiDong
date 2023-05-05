function boxAddress() {
  const btnForm = document.querySelector("#address-form");
  btnForm.addEventListener("click", function () {
    document.querySelector(".address-form").style.display = " flex";
  });
  const boxClose = document.querySelector(".box-close");
  boxClose.addEventListener("click", function () {
    document.querySelector(".address-form").style.display = "none";
  });
}
boxAddress();

// silder

var imgLink = [
  "img/slider1.jpg",
  "img/slider2.jpg",
  "img/slider3.webp",
  "img/slider4.jpg",
];
var indexImg = 0;
var arrowLeft = document.querySelector(".fa-arrow-left");
var arrowRight = document.querySelector(".fa-arrow-right");
var imgLeftTop = document.querySelector(".slider-content-left-top");

arrowLeft.addEventListener("click", function () {
  var slider= document.getElementById("sliders");
  indexImg++;
  if (indexImg >= imgLink.length) {
    indexImg = 0;
  }
    slider.src=imgLink[indexImg];
});
arrowRight.addEventListener("click", function () {
  var slider= document.getElementById("sliders");
  indexImg--;
  if(indexImg <0){
    indexImg = imgLink.length-1;
  }
  slider.src = imgLink[indexImg];
});
// ---------------------------------
function active() {
  const parentList = document.querySelector(".slider-content-left-bottom");
  const childList = document.querySelectorAll(".slider-content-left-bottom li");

  childList.forEach((el) => {
    el.addEventListener("click", function () {
      parentList.querySelector(".active").classList.remove("active");
      el.classList.add("active");
    });
  });
}
active();
