

// When you use class names to reference DOM elements, *always* prefix with "js-"
// This signals to everyone else to not change that class name because it breaks everything js

const thePic = document.querySelector(".js-picture");
const bunnyButton = document.querySelector(".js-bunny");
const kittyButton = document.querySelector(".js-kitty");


function changePic(aPic, imgPath) {
    aPic.src = imgPath;
}

function hello() {
    console.log("it works");
}

function showBunny() {
    changePic(thePic, "images/bunny.jpg");
}

function showKitty() {
    changePic(thePic, "images/kitty.jpg");
}

bunnyButton.addEventListener("click", showBunny);
kittyButton.addEventListener("click", showKitty);