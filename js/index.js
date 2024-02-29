const sliderItems = document.querySelectorAll('.slider-item');
const paginationItems = document.querySelectorAll('.button-pagination');
const controlLeft = document.querySelector('.button-control-left');
const controlRight = document.querySelector('.button-control-right');

let currentIndex = 0;

const setPaginationState = () => {
  document.querySelector('.button-pagination-current').classList.remove('button-pagination-current');
  paginationItems[currentIndex].classList.add('button-pagination-current');
  document.body.style.background = sliderItems[currentIndex].dataset.color;
};

controlLeft.addEventListener('click', () => {
  sliderItems[currentIndex].classList.remove('is-active');
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }
  sliderItems[currentIndex].classList.add('is-active');
  setPaginationState();
});

controlRight.addEventListener('click', () => {
  sliderItems[currentIndex].classList.remove('is-active');
  currentIndex += 1;
  if (currentIndex > sliderItems.length - 1) {
    currentIndex = 0;
  }
  sliderItems[currentIndex].classList.add('is-active');
  setPaginationState();
  });

const modalBtn = document.querySelector('.button-feedback');
const modalSection = document.querySelector('.modal-section');

modalBtn.addEventListener('click', () => {
  modalSection.classList.add('is-open')
})

const closeBtn = document.querySelector('.modal-close-button');
closeBtn.addEventListener('click', () => {
  modalSection.classList.remove('is-open')
})
document.addEventListener('keydown' , (evt)=>{
  if(evt.key == 'Escape') {
    modalSection.classList.remove('is-open')
  }
})
