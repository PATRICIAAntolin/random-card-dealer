/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suite = ["diamond", "heart", "spade", "club"];
  const symbol = ["♦", "♥", "♠", "♣"];
  const number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const numberIndex = Math.floor(Math.random() * 13);
  const suiteIndex = Math.floor(Math.random() * 4);

  document.querySelector("#app").innerHTML = `
  <div class="card ${suite[suiteIndex]}">
  <span>${symbol[suiteIndex]}</span>
  <p>${number[numberIndex]}</p>
  <span>${symbol[suiteIndex]}</span>
  </div>
  `;
};
