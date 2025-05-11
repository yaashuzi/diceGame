/*For P1 */

var randomNumber1 = Math.floor(Math.random() * 6)  + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

/*For P2 */

var randomNumber2 = Math.floor(Math.random() * 6)  + 1;

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/*Result */

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥳 Player One Wins!"
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player Two Wins! 🥳"
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML= "😅 Draw! 😅"
}
