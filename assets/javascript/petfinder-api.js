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
        var queryParameters = "?type=cat&breed=siamese";  //this needs to be dynamically generated based on catalogue results

        $.ajax({
            url: queryURL + queryParameters,
            method: "GET",
            headers: {
                "Authorization" : requestHeader
            }
        }).then(function(response){
            console.log(response);
            console.log(response.animals[0].url);
        });
    });
}

//build and return a jQuery object to match the .pet-result divs in cat-select.html
function buildPetResultDiv(){

}
