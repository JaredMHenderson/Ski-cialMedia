// TODO-
// Research how to share a firebase database



$(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCGFZJ4_F1ujKk_g57Xc0npkyrComAgsMg",
        authDomain: "ski-resort-app.firebaseapp.com",
        databaseURL: "https://ski-resort-app.firebaseio.com",
        projectId: "ski-resort-app",
        storageBucket: "",
        messagingSenderId: "195192287950"
    };

    

//Animtes text input box when "submit" button is clicked
$("#searchButton").on("click", function(){
    console.log("clicked");
    $('input[name=searchBox]').removeClass("animated fadeInUp").addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated shake');
    });;
   

});

//Gets current location and displays latitude/longitude in a div

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    $('#location').append("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
    console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);  
};

//the location function
getLocation();


    $("#coloradoButton").on("click", function () {
        $('#coloradoMap').removeClass("hidden");
    
    });

    $("#utahButton").on("click", function () {
        $('#utahMap').removeClass("hidden");


    });

    $("#californiaButton").on("click", function () {
        $('#californiaMap').removeClass("hidden");


    });
//testing out the Google Maps geolocation feature

    

});
// var map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 6
//     });
//     infoWindow = new google.maps.InfoWindow;

//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }



// var map;
// var infowindow;

// function initMap() {
//     var pyrmont = { lat: -33.867, lng: 151.195 };
//     var colorado = { lat: 39.7392, lng: -104.9903};
//     var utah = {};
//     var california = {};

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: colorado,
//         zoom: 9
//     });

//     infowindow = new google.maps.InfoWindow();
//     var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch({
//         location: colorado,
//         radius: 1000,
//         type: ['restaurant'],
//         vicinity: 'Colorado'

//     }, callback);
// }

// function callback(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//         }
//     }
// }

// function createMarker(place) {
//     var placeLoc = place.geometry.location;
//     var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//     });

//     google.maps.event.addListener(marker, 'click', function () {
//         infowindow.setContent(place.name);
//         infowindow.open(map, this);
//     });
// }


