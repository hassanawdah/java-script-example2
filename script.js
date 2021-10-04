'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

function openModal() {
    console.log('Button Clicked ');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal)
}

function closedModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnClosedModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (event) {
    console.log('A Key Pressed ' + event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closedModal();
    }
})

