//these vars track how many photos have been "liked" that have the corresponding attribute
var coatShortLiked = 0;
var coatLongLiked = 0;

var ageKittenLiked = 0;
var ageAdultLiked = 0;

var colorOrangeLiked = 0;
var colorBlackLiked = 0;
var colorGrayLiked = 0;
var colorWhiteLiked = 0;
var colorCalicoLiked = 0;
var colorTabbyLiked = 0;
var colorSiameseLiked = 0;
var colorPersianLiked = 0;

//these vars track how many photos have been shown that have the corresponding attribute
var coatShortShown = 0;
var coatLongShown = 0;

var ageKittenShown = 0;
var ageAdultShown = 0;

var colorOrangeShown = 0;
var colorBlackShown = 0;
var colorGrayShown = 0;
var colorWhiteShown = 0;
var colorCalicoShown = 0;
var colorTabbyShown = 0;
var colorSiameseShown = 0;
var colorPersianShown = 0;

//event listener for thumb up
$(document).on("click", "#likeButton", function(event) {
  //increment counts for attributes of current image
  switch (randomStockCatAge) {
    case "Adult":
        ageAdultLiked++;
        ageAdultShown++;
        break;

    case "Kitten":
        ageKittenLiked++;
        ageKittenShown++;
        break;

    default:
        console.log("Unexpected Age Value Encountered by Like Button Listener");
  }

  switch (randomStockCatCoat) {
    case "Short Hair":
        coatShortLiked++;
        coatShortShown++;
        break;

    case "Long Hair":
        coatLongLiked++;
        coatLongShown++;
        break;

    default:
        console.log("Unexpected Coat Value Encountered by Like Button Listener");
  }

  switch (randomStockCatBreed) {
    case "Siamese":
        colorSiameseLiked++;
        colorSiameseShown++;
        break;

    case "Persian":
        colorPersianLiked++;
        colorPersianShown++;
        break;

    case "":
        break;

    default:
        console.log("Unexpected Breed Value Encountered by Like Button Listener");
  }

  switch (randomStockCatColor) {
    case "Orange":
        colorOrangeLiked++;
        colorOrangeShown++;
        break;

    case "Black":
        colorBlackLiked++;
        colorBlackShown++;
        break;

    case "Gray":
        colorGrayLiked++;
        colorGrayShown++;
        break;

    case "White":
        colorWhiteLiked++;
        colorWhiteShown++;
        break;

    case "Calico":
        colorCalicoLiked++;
        colorCalicoShown++;
        break;

    case "Tabby":
        colorTabbyLiked++;
        colorTabbyShown++;
        break;

    case "":
        break;

    default:
        console.log("Unexpected Color Value Encountered by Like Button Listener");
  }

  //check whether we have sufficient data to proceed to cat select page
  if(haveEnoughData()){
      searchForCats();
  }
  else{
      var nextPhoto = getNextPhoto();  //select a photo to show next
      displayPhoto(nextPhoto);  //update DOM with new photo
  }
});

//event listener for thumb down
$(document).on("click", "#dislikeButton", function(event) {
  //capture attributes of current image and store in variables
  //increment appropriate global attribute count tracking variables
  if (randomStockCatColor === "Orange") {
    colorOrangeShown++;
  }
  if (randomStockCatColor === "Black") {
    colorBlackShown++;
  }

  if (randomStockCatColor === "Gray") {
    colorGrayShown++;
  }

  if (randomStockCatColor === "White") {
    colorWhiteShown++;
  }

  if (randomStockCatColor === "Calico") {
    colorCalicoShown++;
  }

  if (randomStockCatColor === "Tabby") {
    colorTabbyShown++;
  }

  if (randomStockCatBreed === "Siamese") {
    colorSiameseShown++;
  }

  if (randomStockCatBreed === "Persian") {
    colorPersianShown++;
  }

  if (randomStockCatAge === "Kitten") {
    ageKittenShown++;
  }

  if (randomStockCatAge === "Adult") {
    ageAdultShown++;
  }

  if (randomStockCatCoat === "Short Hair") {
    coatShortShown++;
  }

  if (randomStockCatCoat === "Long Hair") {
    coatLongShown++;
  }

  //select a photo to show next and update DOM with new photo
  getNextPhoto();
});

//evaluates the data we've gathered so far and returns true if we have enough data to move on to cat select, false if not
function haveEnoughData() {
  if (
    (coatShortLiked >= 2 || coatLongLiked >= 2) &&
    (ageKittenLiked >= 2 || ageAdultLiked >= 2) &&
    (colorOrangeLiked >= 2 ||
      colorBlackLiked >= 2 ||
      colorGrayLiked >= 2 ||
      colorWhiteLiked >= 2 ||
      colorCalicoLiked >= 2 ||
      colorTabbyLiked >= 2 ||
      colorSiameseLiked >= 2 ||
      colorPersianLiked >= 2)
  ) {
    return true;
  } else {
    return false;
  }
}

//build an algorithm to select a next photo based on what attributes we need more data for.
//passes the cat to displayPhoto to update the DOM
function getNextPhoto() {
  // Randomly select a cat from the remaining stock cats in the catLibrary
  randomNum = Math.floor(Math.random() * catLibrary.length);
  randomStockCat = catLibrary[randomNum];
  // Test the randomly selected cat to make sure it matches the attributes we need more data for
  if (coatShortShown < coatLongShown && randomStockCat.coat === "Long Hair") {
    // If the randomly selected cat has long hair and we need to show more short haired cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (coatLongShown < coatShortShown && randomStockCat.coat === "Short Hair") {
    // If the randomly selected cat has short hair and we need to show more long haired cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (ageKittenShown < ageAdultShown && randomStockCat.age === "Adult") {
    // If the randomly selected cat is an adult and we need to show more kittens, then randomly select a different cat
    return getNextPhoto();
  }
  if (ageAdultShown < ageKittenShown && randomStockCat.age === "Kitten") {
    // If the randomly selected cat is a kitten and we need to show more adults, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "Orange" &&
    (colorBlackShown < colorOrangeShown ||
      colorGrayShown < colorOrangeShown ||
      colorWhiteShown < colorOrangeShown ||
      colorCalicoShown < colorOrangeShown ||
      colorTabbyShown < colorOrangeShown ||
      colorSiameseShown < colorOrangeShown ||
      colorPersianShown < colorOrangeShown)
  ) {
    // If the randomly selected cat is orange and we have shown too many orange cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "Black" &&
    (colorOrangeShown < colorBlackShown ||
      colorGrayShown < colorBlackShown ||
      colorWhiteShown < colorBlackShown ||
      colorCalicoShown < colorBlackShown ||
      colorTabbyShown < colorBlackShown ||
      colorSiameseShown < colorBlackShown ||
      colorPersianShown < colorBlackShown)
  ) {
    // If the randomly selected cat is black and we have shown too many black cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "Gray" &&
    (colorOrangeShown < colorGrayShown ||
      colorBlackShown < colorGrayShown ||
      colorWhiteShown < colorGrayShown ||
      colorCalicoShown < colorGrayShown ||
      colorTabbyShown < colorGrayShown ||
      colorSiameseShown < colorGrayShown ||
      colorPersianShown < colorGrayShown)
  ) {
    // If the randomly selected cat is gray and we have shown too many gray cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "White" &&
    (colorOrangeShown < colorWhiteShown ||
      colorBlackShown < colorWhiteShown ||
      colorGrayShown < colorWhiteShown ||
      colorCalicoShown < colorWhiteShown ||
      colorTabbyShown < colorWhiteShown ||
      colorSiameseShown < colorWhiteShown ||
      colorPersianShown < colorWhiteShown)
  ) {
    // If the randomly selected cat is white and we have shown too many white cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "Calico" &&
    (colorOrangeShown < colorCalicoShown ||
      colorBlackShown < colorCalicoShown ||
      colorGrayShown < colorCalicoShown ||
      colorWhiteShown < colorCalicoShown ||
      colorTabbyShown < colorCalicoShown ||
      colorSiameseShown < colorCalicoShown ||
      colorPersianShown < colorCalicoShown)
  ) {
    // If the randomly selected cat is calico and we have shown too many calico cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.color === "Tabby" &&
    (colorOrangeShown < colorTabbyShown ||
      colorBlackShown < colorTabbyShown ||
      colorGrayShown < colorTabbyShown ||
      colorWhiteShown < colorTabbyShown ||
      colorCalicoShown < colorTabbyShown ||
      colorSiameseShown < colorTabbyShown ||
      colorPersianShown < colorTabbyShown)
  ) {
    // If the randomly selected cat is tabby and we have shown too many tabby cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.breed === "Siamese" &&
    (colorOrangeShown < colorSiameseShown ||
      colorBlackShown < colorSiameseShown ||
      colorGrayShown < colorSiameseShown ||
      colorWhiteShown < colorSiameseShown ||
      colorCalicoShown < colorSiameseShown ||
      colorTabbyShown < colorSiameseShown ||
      colorPersianShown < colorSiameseShown)
  ) {
    // If the randomly selected cat is siamese and we have shown too many siamese cats, then randomly select a different cat
    return getNextPhoto();
  }
  if (
    randomStockCat.breed === "Persian" &&
    (colorOrangeShown < colorPersianShown ||
      colorBlackShown < colorPersianShown ||
      colorGrayShown < colorPersianShown ||
      colorWhiteShown < colorPersianShown ||
      colorCalicoShown < colorPersianShown ||
      colorTabbyShown < colorPersianShown ||
      colorSiameseShown < colorPersianShown)
  ) {
    // If the randomly selected cat is persian and we have shown too many persian cats, then randomly select a different cat
    return getNextPhoto();
  }
  // If we have run out of cats to show because the user has been disliking them all, show an error message
  // If the randomly selected cat passes all of the above criteria, update the photo and save cat attribute variables
  displayPhoto(randomStockCat);
}

//updates DOM, replacing old photo with new photo passed to the function, and saving variables for the cat attributes
function displayPhoto(cat) {
  // Assign variables
  randomStockCatImage = cat.image;
  randomStockCatAge = cat.age;
  randomStockCatBreed = cat.breed;
  randomStockCatColor = cat.color;
  randomStockCatCoat = cat.coat;
  // Remove this cat from the cat library to avoid repeats
  catLibrary.splice(randomNum, 1);
  // Clear the main content div
  $("#main-content-div").empty();
  // Append a div with id="catPhoto" and set that div's background image
  $("#main-content-div").append($('<div id="catPhoto"></div>'));
  $("#catPhoto").css("background-image", "url(" + randomStockCatImage + ")");
  // Append like/dislike buttons
  $("#main-content-div").append(
    $(`<button class="thumb-button" id="likeButton">
  <i class="far fa-thumbs-up fa-2x"></i>
</button>
<button class="thumb-button" id="dislikeButton">
  <i class="far fa-thumbs-down fa-2x"></i>
</button>`)
  );
}
