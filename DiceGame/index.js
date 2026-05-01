var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
//creating a variable to store the name of the random image we want to display
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
//creating a path to the random image we want to display
var randomImageSource1 = "images/" + randomDiceImage1;
// To find the image tag in the html and change the source attribute to the random image source we just created
dice_1 = document.querySelectorAll("img.img1")[0].setAttribute("src", randomImageSource1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
// Changing the source attribute of the second image tag to the random image source we just created
dice_2 = document.querySelectorAll("img.img2")[0].setAttribute("src", randomImageSource2);

// Logic to decide the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}
