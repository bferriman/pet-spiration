var PetfinderAPIKey = "WdIiOOJyE03Hnp7raZfKwVZbInn5Nb7ZIQISdDaCo3aclUJHDj";
var PetfinderAPISecret = "SgOkPoh9MPc11jYtWQp3ukO1tcpFH0fAz5U3UbBn";


//called once we have enough data; determine search parameters and make API call
function searchForCats(){

    var queryURL = "https://api.petfinder.com/v2/oauth2/token";
    var queryData = "grant_type=client_credentials&client_id=" + PetfinderAPIKey + "&client_secret=" + PetfinderAPISecret;

    $.ajax({
        url: queryURL,
        method: "POST",
        data: queryData,
    }).then(function(response){
        var token = response.access_token;

        var requestHeader = "Bearer " + token;
        queryURL = "https://api.petfinder.com/v2/animals";

        var coatQuery = "";
        if(coatShortLiked >= coatLongLiked) { coatQuery += "&coat=short"; }
        if(coatLongLiked >= coatShortLiked) { coatQuery += "&coat=medium,long"; }

        var ageQuery = "";
        if(ageKittenLiked >= ageAdultLiked) { ageQuery += "&age=baby,young"; }
        if(ageAdultLiked >= ageKittenLiked) { ageQuery += "&age=adult,senior"; }
        
        var colorQuery = "";
        var currentMax = 0;

        //orange
        if(colorOrangeLiked > currentMax) {
            currentMax = colorOrangeLiked;
            colorQuery = "&color=Orange+%26+White,Orange+%2F+Red";
        }
        else if(colorOrangeLiked === currentMax) {
            colorQuery += "&color=Orange+%26+White,Orange+%2F+Red";
        }
        //black
        if(colorBlackLiked > currentMax) {
            currentMax = colorBlackLiked;
            colorQuery = "&color=Black";
        }
        else if(colorBlackLiked === currentMax) {
            colorQuery += "&color=Black";
        }
        //gray
        if(colorGrayLiked > currentMax) {
            currentMax = colorGrayLiked;
            colorQuery = "&color=Gray+%2F+Blue+%2F+Silver,Smoke,Tabby+%28Gray+%2F+Blue+%2F+Silver%29";
        }
        else if(colorGrayLiked === currentMax) {
            colorQuery += "&color=Gray+%2F+Blue+%2F+Silver,Smoke,Tabby+%28Gray+%2F+Blue+%2F+Silver%29";
        }
        //white
        if(colorWhiteLiked > currentMax) {
            currentMax = colorWhiteLiked;
            colorQuery = "&color=Cream+%2F+Ivory,White";
        }
        else if(colorWhiteLiked === currentMax) {
            colorQuery += "&color=Cream+%2F+Ivory,White";
        }
        //calico
        if(colorCalicoLiked > currentMax) {
            currentMax = colorCalicoLiked;
            colorQuery = "&color=Calico,Dilute+Calico";
        }
        else if(colorCalicoLiked === currentMax) {
            colorQuery += "&color=Calico,Dilute+Calico";
        }
        //tabby
        if(colorTabbyLiked > currentMax) {
            currentMax = colorTabbyLiked;
            colorQuery = "&color=Tabby+%28Brown+%2F+Chocolate%29,Tabby+%28Buff+%2F+Tan+%2F+Fawn%29,Tabby+%28Gray+%2F+Blue+%2F+Silver%29,Tabby+%28Leopard+%2F+Spotted%29,Tabby+%28Orange+%2F+Red%29,Tabby+%28Tiger+Striped%29,Torbie";
        }
        else if(colorTabbyLiked === currentMax) {
            colorQuery += "&color=Tabby+%28Brown+%2F+Chocolate%29,Tabby+%28Buff+%2F+Tan+%2F+Fawn%29,Tabby+%28Gray+%2F+Blue+%2F+Silver%29,Tabby+%28Leopard+%2F+Spotted%29,Tabby+%28Orange+%2F+Red%29,Tabby+%28Tiger+Striped%29,Torbie";
        }
        //siamese
        if(colorSiameseLiked > currentMax) {
            currentMax = colorSiameseLiked;
            colorQuery = "&breed=Siamese,Applehead+Siamese,Balinese";
        }
        else if(colorSiameseLiked === currentMax) {
            colorQuery += "&breed=Siamese,Applehead+Siamese,Balinese";
        }
        //persian
        if(colorPersianLiked > currentMax) {
            currentMax = colorPersianLiked;
            colorQuery = "&breed=Persian,Himalayan";
        }
        else if(colorPersianLiked === currentMax) {
            colorQuery += "&breed=Persian,Himalayan";
        }

        var queryParameters = "?type=cat&status=adoptable" + colorQuery + ageQuery + coatQuery + "&limit=5";
        console.log(queryParameters);

        $.ajax({
            url: queryURL + queryParameters,
            method: "GET",
            headers: {
                "Authorization" : requestHeader
            }
        }).then(function(response){
            console.log(response);
            for(var i = 0; i < 5; i++){
                console.log(response.animals[i].url);
            }
        });
    });
}

//build and return a jQuery object to match the .pet-result divs in cat-select.html
function buildPetResultDiv(){

    var petResultDiv = $("<div>");
    petResultDiv.attr("class", "pet-result");

        var resultImageDiv = $("<div>");
        resultImageDiv.attr("class", "pet-result-img");
        petResultDiv.append(resultImageDiv);

        var headerEl = $("<h4>");
        headerEl.attr("class", "pet-result-name");
        petResultDiv.append(headerEl);

        var pPetEl = $("<p>");
        petResultDiv.append(pPetEl);

            var ageSpan = $("<span>");
            ageSpan.attr("class", "pet-result-age");
            pPetEl.append(ageSpan);

            var genderSpan = $("<span>");
            genderSpan.attr("class", "pet-result-gender");
            pPetEl.append(genderSpan);

            var breedSpan = $("<span>");
            breedSpan.attr("class", "pet-result-breed");
            pPetEl.append(breedSpan);

        var pAddressEl = $("<p>");
        pAddressEl.attr("class", "shelter-address");
        petResultDiv.append(pAddressEl);
        
        var mapButton = $("<button>");
        mapButton.attr("class", "mapItBtn");
        petResultDiv.append(mapButton);

    return petResultDiv;
}
