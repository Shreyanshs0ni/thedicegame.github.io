var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImages = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomImages;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("button")[0].innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelectorAll("button")[0].innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelectorAll("button")[0].innerHTML = "Draw! 🙌🏼";
}
