"use strict";

const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".line");
const showModalAll = document.querySelector(".lines");
const overlay = document.querySelector(".overlay");

// Functions
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Showing Modal
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

showModalAll.addEventListener("click", openModal);

// Closing Modal
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

window.addEventListener("resize", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
