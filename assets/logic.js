$(function(){



// 

// let weatherOnline = "http://api.worldweatheronline.com/free/v1/";
// let apiKey = "68115c9b7784fad87c21511172012 ";
// let queryUrl = 
// $.ajax({
//     url: queryUrl,
//     method: "GET"
// }).done(function(response){
//     console.log(response);
// });


$("#searchButton").on("click", function(){
    console.log("clicked");
    $('input[name=searchBox]').removeClass("animated fadeInUp").addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated shake');
    });;
   

});

var x = $('#location');


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

getLocation();


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

});