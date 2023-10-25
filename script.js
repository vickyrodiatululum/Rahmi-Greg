// script countdown
simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 11, // required
  day: 18, // required
  hours: 7, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

// script audio
const rootElement = document.querySelector(":root");
const iconAudio = document.querySelector(".icon-audio");
const icon = document.querySelector(".icon-audio i");
const lagu = document.querySelector("#lagu");
let isPlaying = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  // localStorage.setItem("opened", "true");
  playAudio();
}

function playAudio() {
  lagu.volume = 0.5;
  iconAudio.style.display = "flex";
  lagu.play();
  isPlaying = true;
}
iconAudio.onclick = function () {
  if (isPlaying) {
    lagu.pause();
    icon.classList.remove("bi-play-circle");
    icon.classList.add("bi-pause-circle");
  } else {
    lagu.play();
    icon.classList.add("bi-play-circle");
    icon.classList.remove("bi-pause-circle");
  }
  isPlaying = !isPlaying;
};
// if (!localStorage.getItem("opened")) {
// }
disableScroll();

// galleri
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

 




