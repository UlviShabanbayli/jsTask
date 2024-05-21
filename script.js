"use strict";

const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
console.log(card);

document.querySelector("body").addEventListener("click", function () {
  h1.style.color = "red";
});

document.querySelector(".btn").addEventListener("click", function () {
  card.classList.add("hidden");
});
