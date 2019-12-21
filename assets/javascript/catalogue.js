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
  //capture attributes of current image and store in variables
  //increment appropriate global attribute count tracking variables
  //check whether we have sufficient data to proceed to cat select page
  //if not, select a photo to show next
  //update DOM with new photo
});

//event listener for thumb down
$(document).on("click", "#dislikeButton", function(event) {
  
    
  //capture attributes of current image and store in variables    
  //increment appropriate global attribute count tracking variables
    if(randomStockCatColor === "Orange"){
        colorOrangeShown++

    }
    if(randomStockCatColor === "Black"){
        colorBlackShown++
    }

    if(randomStockCatColor === "Gray"){
        colorGrayShown++
    }

    if(randomStockCatColor === "White"){
        colorWhiteShown++
    }

    if(randomStockCatColor === "Calico"){
        colorCalicoshow++
    }

    if(randomStockCatColor === "Tabby"){
        colorTabbyShown++
    }

    if(randomStockCatColor === "Siamese"){
        colorSiameseShown++
    }

    if(randomStockCatColor === "Persian"){
        colorPersianShown++
    }

    if(randomStockCatAge === "Kitten"){
        ageKittenShown++
    }

    if(randomStockCatAge === "Adult"){
        ageAdultShown++
    }

    if(randomStockCatCoat === "Short Hair"){
        coatShortShown++
    }

    if(randomStockCatCoat === "Long Hair"){
        coatLongShown++
    }

  
  //select a photo to show next
  getNextPhoto()
  //update DOM with new photo
  function displayPhoto(cat)
});

//evaluates the data we've gathered so far and returns true if we have enough data to move on to cat select, false if not
function haveEnoughData() {}

//build an algorithm to select a next photo based on what attributes we need more data for.
//returns the next photo object to be displayed
function getNextPhoto() {}

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
