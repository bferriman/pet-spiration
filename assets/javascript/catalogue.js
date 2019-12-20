//event listener for thumb up
$(document).on("click", "#likeButton", function(event){
    //capture attributes of current image and store in variables

    //increment appropriate global attribute count tracking variables

    //check whether we have sufficient data to proceed to cat select page

    //if not, select a photo to show next

    //update DOM with new photo
});

//event listener for thumb down
$(document).on("click", "#dislikeButton", function(event){
    //capture attributes of current image and store in variables

    //increment appropriate global attribute count tracking variables

    //check whether we have sufficient data to proceed to cat select page

    //if not, select a photo to show next

    //update DOM with new photo
});

//evaluates the data we've gathered so far and returns true if we have enough data to move on to cat select, false if not
function haveEnoughData(){

}

//build an algorithm to select a next photo based on what attributes we need more data for.
//returns the next photo object to be displayed
function getNextPhoto(){

}

//updates DOM, replacing old photo with new photo passed to the function
function displayPhoto(photo){

}