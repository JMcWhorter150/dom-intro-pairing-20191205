

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

// 1. A reference to the .js-photo-container
const photoContainer = document.querySelector(".js-photo-container");
// 2. A function that can accept an image path string and return an img DOM element, whose source points to that img path
function imgWithPath(imgPath) {
    // create an image element
    const img = document.createElement("img");
    // set its path
    img.src = imgPath;
    // alternatively, we could call changePic
    // changePic(img, imgPath);
    // return the element
    return img;
}

function appendImageToContainer(imgEl) {
    photoContainer.appendChild(imgEl);
}
// 3.

const images = [
    "images/bunny.jpg",
    "images/kitty.jpg"
];

function displayImages(imgArray) {
    let imgsWSrc = imgArray.map(imgWithPath);
    imgsWSrc.map(appendImageToContainer);
}