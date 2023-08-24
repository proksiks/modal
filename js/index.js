"use strict"

const button = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#close')

document.addEventListener('click', function (e) {
    if (e.target === button) {
        modal.classList.add('modal_open')
    }
    if (e.target === modal || e.target === closeButton) {
        modal.classList.remove('modal_open')
    }
})