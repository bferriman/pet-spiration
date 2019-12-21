// declare variables
const aboutSection = $("#about-section");
const mainContentHeight = $(".main-content-height");
let randomNum;
let randomStockCatAge;
let randomStockCatCoat;
let randomStockCatColor;
let randomStockCatBreed;
let randomStockCatImage;

// When user clicks the "Show me cats!" button...
$("#startButton").on("click", function() {
  // Hide the about section
  aboutSection.hide();
  //   $("#startButton").hide();
  // Adjust height of main content section
  mainContentHeight.css("min-height", "calc(100vh - 58px - 4px - 58px)");
  // Populate random cat photo from cat-image-library.js
  randomNum = Math.floor(Math.random() * catLibrary.length);
  randomStockCatImage = catLibrary[randomNum].image;
  displayPhoto(randomStockCatImage);
  // Populate like and dislike buttons
});
