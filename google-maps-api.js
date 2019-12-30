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
        center: {lat: 37.5407, lng: -77.4360}
    });
    geocoder = new google.maps.Geocoder();
    getLocation();
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

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon)
  map.setCenter(latlon)

  
    

}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}