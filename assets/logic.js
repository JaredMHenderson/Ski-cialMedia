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



//testing out the Google Maps geolocation feature

    

});
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}