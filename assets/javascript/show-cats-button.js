// declare variables
const aboutSection = $("#about-section");
const mainContentHeight = $(".main-content-height");

//need to get a first photo and do the DOM work

$("#startButton").on("click", function() {
  // Hide the button & the about section, and adjust height of main content section
  aboutSection.hide();
  $("#startButton").hide();
  mainContentHeight.css("min-height", "calc(100vh - 58px - 4px - 58px)");
  // Populate cat photo
  // Populate like and dislike buttons
});
