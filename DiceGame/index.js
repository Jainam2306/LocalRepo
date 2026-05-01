var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
dice_1 = document.querySelectorAll("img.img1")[0].setAttribute("src", randomImageSource1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
dice_2 = document.querySelectorAll("img.img2")[0].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.getElementById("resultTitle").innerHTML = "🎲 <em>Player 1</em> Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementById("resultTitle").innerHTML = "🎲 <em>Player 2</em> Wins!";
}
else {
    document.getElementById("resultTitle").innerHTML = "It's a <em>Draw!</em>";
}
