let slideIndex = 1;
let interval = setInterval("slidesShow()", 2000);

let slides = document.getElementsByTagName('li');
let dots = document.getElementsByClassName('dot');

slidesShow();

function slidesShow() {

  (slideIndex > slides.length) ? slideIndex = 1 
  : (slideIndex < 1) ? slideIndex = 5 
  : slideIndex;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
  slideIndex++;
}

function otherSlide(nb) {
  slideIndex += nb - 1;
  slidesShow();
}

function currentSlide(position) {
  slideIndex = position ;
  slidesShow();
}

function stop() {
  clearInterval(interval);
}

function restart() {
  interval = setInterval("slidesShow()", 2000);
}