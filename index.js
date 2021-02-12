
var randomNumber1 = [1,2,3,4,5,6];
var length = randomNumber1.length; 
var random = randomNumber1[Math.floor(Math.random()*length)];
var randomDice = "dice" + random +".png";
var randomImage = "./images/" + randomDice;
var imageNum1 = document.querySelector(".img1");
imageNum1.setAttribute("src", randomImage); 

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "./images/" + randomDice2;
var pickImage = document.querySelector(".img2");
pickImage.setAttribute("src", randomImage2);

if (random > randomNumber2) {
    document.querySelector(".winOrLoss").innerHTML="&#9873;Player1Wins"
}
else 
if (random < randomNumber2) {
    document.querySelector(".winOrLoss").innerHTML="Player2Wins&#9873;"
}
else {document.querySelector(".winOrLoss").innerHTML="&#9873;Draw&#9873;"
}