/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
///
window.cardGenerate = function() {
  const cardValue = [
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
  const cardSuit = ["♦", "♥", "♠", "♣"];

  let randomValue = cardValue[Math.floor(Math.random() * cardValue.length)];
  let randomSuit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
  //Sustituimos el valor de la carta
  document.getElementById("centralColumn").innerHTML = randomValue;
  //Sustituimos los palos desde el id de la columna html
  document.getElementById("firstColumn").innerHTML = randomSuit;
  document.getElementById("thirdColumn").innerHTML = randomSuit;
  //Añadir el color rojo a diamentes y corazones desde el id
  if (randomSuit === "♦" || randomSuit === "♥") {
    document.getElementById("firstColumn").style.color = "red";
    document.getElementById("thirdColumn").style.color = "red";
    document.getElementById("centralColumn").style.color = "red";
  } else {
    document.getElementById("firstColumn").style.color = "";
    document.getElementById("thirdColumn").style.color = "";
    document.getElementById("centralColumn").style.color = "";
  }
};

window.onload = function() {
  cardGenerate();
};
let intervalId = null;
window.drawHand = function() {
  intervalId = setInterval(cardGenerate, 2000);
};
window.stopDrawHand = function() {
  clearInterval(intervalId);
};
window.changeSize = function() {
  let widthValue = document.getElementById("width").value;
  let heigthValue = document.getElementById("heigth").value;
  document.getElementById("idCard").style.height = heigthValue + "px";
  document.getElementById("idCard").style.width = widthValue + "px";
};
