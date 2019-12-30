//handle Google maps API call and map display
$(document).on("click", ".mapItBtn", function(event){ 


var clickBtn = $(event.target)


var addressValue = clickBtn.siblings(".shelter-address").text()

console.log (".shelter-address", addressValue)

codeAddress(addressValue, geocoder, map)
});

var geocoder;
var map;
// var address = "Richmond SPCA";
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: -34.397, lng: 150.644}
    });
    geocoder = new google.maps.Geocoder();
    // codeAddress(geocoder, map);
}
// Richmond LongLat 37.5407° N, 77.4360° W
// This is where we pass the address into the geocoder and get a long lat for it
function codeAddress(address, geocoder, map) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        } else {
        alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}