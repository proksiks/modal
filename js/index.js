"use strict"

const button = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const modalHolder = document.querySelector('.modal-holder')
const closeButton = document.querySelector('#close')

console.log(button);
console.log(modal);

document.addEventListener('click', function (e) {
    if (e.target === button) {
        modal.classList.add('modal_open')
    }
    if (e.target === modal || e.target === closeButton) {
        modal.classList.remove('modal_open')
    }
})