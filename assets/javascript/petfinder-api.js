var PetfinderAPIKey = "WdIiOOJyE03Hnp7raZfKwVZbInn5Nb7ZIQISdDaCo3aclUJHDj";
var PetfinderAPISecret = "SgOkPoh9MPc11jYtWQp3ukO1tcpFH0fAz5U3UbBn";

function getGeolocation() {
  this.navigator.geolocation.getCurrentPosition(
    onGeolocateSuccess,
    onGeolocateError
  );
}

function onGeolocateSuccess(coordinates) {
  const { latitude, longitude } = coordinates.coords;
  console.log("Latitude: " + latitude + " Longitude: " + longitude);
  searchForCats(true, latitude, longitude);
}

function onGeolocateError(error) {
  console.warn(error.code, error.message);

  if (error.code === 1) {
    console.log("User declined access to their geolocation");
  } else if (error.code === 2) {
    console.log("Geolocation unavailable");
  } else if (error.code === 3) {
    console.log("Timeout");
  }

  searchForCats(false, 0, 0);
}

//called once we have enough data; determine search parameters and make API call
function searchForCats(haveLocation, lat, lng) {
  var queryURL = "https://api.petfinder.com/v2/oauth2/token";
  var queryData =
    "grant_type=client_credentials&client_id=" +
    PetfinderAPIKey +
    "&client_secret=" +
    PetfinderAPISecret;

  $.ajax({
    url: queryURL,
    method: "POST",
    data: queryData
  }).then(function(response) {
    var token = response.access_token;

    var requestHeader = "Bearer " + token;
    queryURL = "https://api.petfinder.com/v2/animals";

    var coatQuery = "";
    if (coatShortLiked >= coatLongLiked) {
      coatQuery += "&coat=short";
    }
    if (coatLongLiked >= coatShortLiked) {
      coatQuery += "&coat=medium,long";
    }

    var ageQuery = "";
    if (ageKittenLiked >= ageAdultLiked) {
      ageQuery += "&age=baby,young";
    }
    if (ageAdultLiked >= ageKittenLiked) {
      ageQuery += "&age=adult,senior";
    }

    var colorQuery = "";
    var currentMax = 0;

    //orange
    if (colorOrangeLiked > currentMax) {
      currentMax = colorOrangeLiked;
      colorQuery = "&color=Orange+%26+White,Orange+%2F+Red";
    } else if (colorOrangeLiked === currentMax) {
      colorQuery += "&color=Orange+%26+White,Orange+%2F+Red";
    }
    //black
    if (colorBlackLiked > currentMax) {
      currentMax = colorBlackLiked;
      colorQuery = "&color=Black";
    } else if (colorBlackLiked === currentMax) {
      colorQuery += "&color=Black";
    }
    //gray
    if (colorGrayLiked > currentMax) {
      currentMax = colorGrayLiked;
      colorQuery =
        "&color=Gray+%2F+Blue+%2F+Silver,Smoke,Tabby+%28Gray+%2F+Blue+%2F+Silver%29";
    } else if (colorGrayLiked === currentMax) {
      colorQuery +=
        "&color=Gray+%2F+Blue+%2F+Silver,Smoke,Tabby+%28Gray+%2F+Blue+%2F+Silver%29";
    }
    //white
    if (colorWhiteLiked > currentMax) {
      currentMax = colorWhiteLiked;
      colorQuery = "&color=Cream+%2F+Ivory,White";
    } else if (colorWhiteLiked === currentMax) {
      colorQuery += "&color=Cream+%2F+Ivory,White";
    }
    //calico
    if (colorCalicoLiked > currentMax) {
      currentMax = colorCalicoLiked;
      colorQuery = "&color=Calico,Dilute+Calico";
    } else if (colorCalicoLiked === currentMax) {
      colorQuery += "&color=Calico,Dilute+Calico";
    }
    //tabby
    if (colorTabbyLiked > currentMax) {
      currentMax = colorTabbyLiked;
      colorQuery =
        "&color=Tabby+%28Brown+%2F+Chocolate%29,Tabby+%28Buff+%2F+Tan+%2F+Fawn%29,Tabby+%28Gray+%2F+Blue+%2F+Silver%29,Tabby+%28Leopard+%2F+Spotted%29,Tabby+%28Orange+%2F+Red%29,Tabby+%28Tiger+Striped%29,Torbie";
    } else if (colorTabbyLiked === currentMax) {
      colorQuery +=
        "&color=Tabby+%28Brown+%2F+Chocolate%29,Tabby+%28Buff+%2F+Tan+%2F+Fawn%29,Tabby+%28Gray+%2F+Blue+%2F+Silver%29,Tabby+%28Leopard+%2F+Spotted%29,Tabby+%28Orange+%2F+Red%29,Tabby+%28Tiger+Striped%29,Torbie";
    }
    //siamese
    if (colorSiameseLiked > currentMax) {
      currentMax = colorSiameseLiked;
      colorQuery = "&breed=Siamese,Applehead+Siamese,Balinese";
    } else if (colorSiameseLiked === currentMax) {
      colorQuery += "&breed=Siamese,Applehead+Siamese,Balinese";
    }
    //persian
    if (colorPersianLiked > currentMax) {
      currentMax = colorPersianLiked;
      colorQuery = "&breed=Persian,Himalayan";
    } else if (colorPersianLiked === currentMax) {
      colorQuery += "&breed=Persian,Himalayan";
    }

    var locationQuery = "";
    if (haveLocation) {
      locationQuery += "&location=" + lat + "," + lng;
      locationQuery += "&distance=500"; //max allowed distance
      locationQuery += "&sort=distance"; //return closest results
    }

    var queryParameters =
      "?type=cat&status=adoptable" +
      colorQuery +
      ageQuery +
      coatQuery +
      locationQuery +
      "&limit=5";
    console.log(queryParameters);

    $.ajax({
      url: queryURL + queryParameters,
      method: "GET",
      headers: {
        Authorization: requestHeader
      }
    }).then(function(response) {
      console.log(response);
      console.log("Found " + response.animals.length + " animals");
      buildPetSelectPage(response);
    });
  });
}

//build the pet select page
function buildPetSelectPage(response) {
  $("#main-content").empty();

  var containerDiv = $("<div>");
  containerDiv.attr("class", "container");
  $("#main-content").append(containerDiv);

  var rowDiv = $("<div>");
  rowDiv.attr("class", "row");
  containerDiv.append(rowDiv);

  var colDiv = $("<div>");
  colDiv.attr("class", "col text-center catalogue-height");
  rowDiv.append(colDiv);

  var selectHeaderEl = $("<h3>");
  selectHeaderEl.attr("class", "page-header");
  selectHeaderEl.text("You have been matched with local, adoptable cats!");
  colDiv.append(selectHeaderEl);

  var petDisplayDiv = $("<div>");
  petDisplayDiv.attr(
    "class",
    "d-flex flex-wrap justify-content-center align-items-stretch"
  );
  petDisplayDiv.attr("id", "petfinder-display");
  colDiv.append(petDisplayDiv);

  for (var i = 0; i < 5 && i < response.animals.length; i++) {
    petDisplayDiv.append(buildPetResultDiv(response.animals[i]));
  }
}

//build and return a jQuery object to match the .pet-result divs in cat-select.html
function buildPetResultDiv(cat){

    var petResultDiv = $("<div>");
    petResultDiv.attr("class", "pet-result");

        var resultImageDiv = $("<div>");
        resultImageDiv.attr("class", "pet-result-img");
        if(cat.photos[0] != undefined) {
            resultImageDiv.css("background-image", "url('" + cat.photos[0].large + "')");
        }
        petResultDiv.append(resultImageDiv);

        var headerEl = $("<h4>");
        headerEl.attr("class", "pet-result-name");
        headerEl.text(cat.name);
        petResultDiv.append(headerEl);

        var pPetEl = $("<p>");
        petResultDiv.append(pPetEl);

            var ageSpan = $("<span>");
            ageSpan.attr("class", "pet-result-age");
            ageSpan.text(cat.age);
            pPetEl.append(ageSpan);
            pPetEl.append("&nbsp;");

            var genderSpan = $("<span>");
            genderSpan.attr("class", "pet-result-gender");
            genderSpan.text(cat.gender);
            pPetEl.append(genderSpan);
            pPetEl.append("&nbsp;");

            var breedSpan = $("<span>");
            breedSpan.attr("class", "pet-result-breed");
            var breedStr = cat.breeds.primary;
            if(cat.breeds.secondary !== null) {
                breedStr += " / " + cat.breeds.secondary;
            }
            breedSpan.text(breedStr);
            pPetEl.append(breedSpan);

        var pAddressEl = $("<p>");
        pAddressEl.attr("class", "shelter-address");
        var streetAdd = cat.contact.address.address1;
        var cityAdd = cat.contact.address.city;
        var stateAdd = cat.contact.address.state;
        var zipAdd = cat.contact.address.postcode;
        pAddressEl.text(streetAdd + ", " + cityAdd + ", " + stateAdd + " " + zipAdd);
        petResultDiv.append(pAddressEl);
        
        var mapButton = $("<button>");
        mapButton.attr("class", "mapItBtn");
        mapButton.text("Map It!");
        petResultDiv.append(mapButton);

        // Adding a handler to the button

        $(document).on("click", ".mapItBtn", function(){
            var finalAddress = (streetAdd + ", " + cityAdd + ", " + stateAdd + " " +zipAdd);

            var URLpass = "map.html?address=" + finalAddress

            $(location).attr('href', URLpass)
        });

    return petResultDiv;
}
