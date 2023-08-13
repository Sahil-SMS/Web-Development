'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
const open = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const closes = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', open);
overlay.addEventListener('click', closes);
closeModal.addEventListener('click', closes);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closes();
    }
  }
});
