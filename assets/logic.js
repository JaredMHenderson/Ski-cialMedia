
//variables for google maps

var infoWindow;
var mapElement;
var map;
var markerArray=[];
var placesSearch;

//function to initialize the google map
var mapsInitialized = () =>
{
    map = new google.maps.Map(document.getElementById('state-map'),

        {zoom: 7,
            center: { lat: 39.7392, lng: -104.9903}
        });

    placesSearch = new google.maps.places.PlacesService(map);
    infoWindow = new google.maps.InfoWindow();
}

//iniitalizing firebase data base
var config = {

    apiKey: "AIzaSyCGFZJ4_F1ujKk_g57Xc0npkyrComAgsMg",
    authDomain: "ski-resort-app.firebaseapp.com",
    databaseURL: "https://ski-resort-app.firebaseio.com",
    projectId: "ski-resort-app",
    storageBucket: "ski-resort-app.appspot.com",
    messagingSenderId: "195192287950"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database();


function validation(name, email) {

	if(name === '') {
		return false;
	}

	if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
		return false;
	}
	return true;

};	


function submitClick(event) {

	event.preventDefault();

	const name = $('#name_input').val().trim();
	const email = $('#email_input').val().trim();

	if(validation(name, email)) {

		var ref = firebaseRef.ref('users');

		var data = {
			name,
			email
		};

		ref.push(data);

		$('#name_input').val("");
		$('#email_input').val("");
		$("#alert").text("")

	}

	else {

		$("#alert").text("Please enter a valid name and email.")
	}
};
	
	$("#submit").on("click", submitClick);

$(function(){

    // submit user input and push to firebase
    function submitClick(event) {

        event.preventDefault();
        const name = $('#name_input').val().trim();
        const email = $('#email_input').val().trim();

        if (validation(name, email)) {
            var ref = firebaseRef.ref('users');

            var data = {
                name,
                email
            };

            ref.push(data);

            $('#name_input').val("");
            $('#email_input').val("");
            $("#alert").text("")

        }

        else {

            $("#alert").text("Please enter a valid name and email.")

        }

    };

    //user input validation
    function validation(name, email) {

        if (name === '') {

            return false;

        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {

            return false;

        }

        return true;

    };	

    $("#submit").on("click", submitClick);

    function getPlaces(index, placesArray) {

        placesSearch.textSearch({query: placesArray[index].name}, function (placesResult) {

            if(index === 0){

                markerArray.forEach(marker => {

                    marker.setMap(null);

                });

                map.setCenter(placesResult[0].geometry.location);

            }

            if(placesResult && placesResult[0]) {

                let marker = new google.maps.Marker({

                  position: placesResult[0].geometry.location,
                  map: map,
                  clickable: true

                });

                marker.addListener('click', () => {

                    infoWindow.setContent(JSON.stringify(placesResult[0].formatted_address));
                    console.log(placesResult[0].formatted_address);
                    infoWindow.setPosition(placesResult[0].geometry.location);
                    infoWindow.open(map);

                });

                marker.addListener("mouseout", () => {

                  infoWindow.close();

                });

              markerArray.push(marker);

            }

            if(index < placesArray.length - 2) {

                getPlaces(++index, placesArray);

            }
    });
}

    //adds marker to map when resort button is clicked

    function getResort(resort) {

        placesSearch.textSearch({query: resort}, function (placesResult) {
            
            markerArray.forEach(marker => {

                marker.setMap(null);

            });

            map.setCenter(placesResult[0].geometry.location);
            
            if(placesResult && placesResult[0]) {

                markerArray.push(new google.maps.Marker({

                	position: placesResult[0].geometry.location,
                    map: map,
                    clickable: true,
                    title: "Click for more details"
                    
                }));

            }

        });
               
    };

    function capitalizeWords(str)
    {

    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    }

// Loads maps and weather for user search


    function submitButtonClick(event)
    {
        event.preventDefault();
        let searchedPlace = $('#searchBox').val();
        $("#list").empty().removeClass('centralCaBgImage northernCaBgImage utahBgImage weatherText').addClass("searchBgImage").append(`<h1 class="animated fadeIn">${searchedPlace}<br>Weather Info</h1>`);
        
        getResort(searchedPlace)

            weatherAPI(searchedPlace, null, null);
            $('#searchBox').val("");
    
    };

    $('#searchButton').on("click", submitButtonClick);
    

    // array of resorts that show up when each state Button is clicked

    let coloradoResorts = [keystone, copperMountain, loveland, winterPark, crestedButte, vail];
    let utahResorts = [beaverMountain, brightonSkiResort, deerValley, solitudeMountain, parkCityMountain];
    let centralCaResorts = [mammothMountain, badgerPass, dodgeRidge, chinaPeak];
    let northernCaResorts = [bearValley, northStar, sugarBowlSkiResort, borealMountainResort, heavenlyMountain];


//on click function for colorado button
function coloradoButtonClick (event)
{
    event.preventDefault();
    $('#myVideo').remove();

    $("#list").empty().removeClass('list_background centralCaBgImage northernCaBgImage utahBgImage weatherText searchBgImage').addClass('coloradoBgImage').append(`<h1 class="animated fadeIn">Colorado Resorts</h1>`);
    // creates a button for each resort in the array and gives it a unique id with the name of the resort

    for (var i = 0; i < coloradoResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Colorado" 
            data-name='${coloradoResorts[i].name}' data-id='${coloradoResorts[i].id}'>${coloradoResorts[i].name}</button><div>`);
    };

    
    // adds the map of resorts
    getPlaces(0, coloradoResorts);

};

    $('#colorado-button').on("click", coloradoButtonClick);

//on click function for utah button
    function utahButtonClick(event)
    {
        event.preventDefault();
        $('#myVideo').remove();
        $("#list").empty().removeClass('coloradoBgImage centralCaBgImage northernCaBgImage weatherText searchBgImage').addClass('utahBgImage').append(`<h1 class="animated fadeIn">Utah Resorts</h1>`);

        for (var i = 0; i < utahResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Utah" 
            data-name='${utahResorts[i].name}' data-id='${utahResorts[i].id}'>${utahResorts[i].name}</button></div>`);
        };

        // adds the map of resorts

        getPlaces(0, utahResorts);
    
    };

$('#utah-button').on("click", utahButtonClick);

//on click function for central CA button
    function centralCaButtonClick(event)
    {
        event.preventDefault();
        $('#myVideo').remove();
        $("#list").empty().removeClass('coloradoBgImage utahCaBgImage northernCaBgImage weatherText searchBgImage').addClass('centralCaBgImage').append(`<h1 class="animated fadeIn">Central California Resorts</h1>`);

        for (var i = 0; i < centralCaResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Central California" 
            data-name='${centralCaResorts[i].name}' data-id='${centralCaResorts[i].id}'>${centralCaResorts[i].name}</button></div>`);
        };

        // adds the map of resorts
        getPlaces(0, centralCaResorts);

    };

$('#central-california-button').on("click", centralCaButtonClick);


    //on click function for northern CA button
    
    function northernCaButtonClick(event)
    {
        event.preventDefault();
        $('#myVideo').remove();
        $("#list").empty().removeClass('coloradoBgImage utahCaBgImage centralCaBgImage weatherText searchBgImage').addClass('northernCaBgImage').append(`<h1 class="animated fadeIn">Northern California Resorts</h1>`);
        for (var i = 0; i < northernCaResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Northern California" 
            data-name='${northernCaResorts[i].name}' data-id='${northernCaResorts[i].id}'>${northernCaResorts[i].name}</button></div>`);
        };

        // adds the map of resorts

        getPlaces(0, northernCaResorts);

    };

$('#northern-california-button').on("click", northernCaButtonClick) 


//Function for Back Button

    $(document).on('click', '.back-button', function ()
    {
        if($(this).attr('data-place') === 'Colorado') {
            coloradoButtonClick();
        }
        else if ($(this).attr('data-place') === 'Utah') {
            utahButtonClick()
        }
        else if ($(this).attr('data-place') === 'Central California') {
            centralCaButtonClick()
        }
        else if ($(this).attr('data-place') === 'Northern California') {
            northernCaButtonClick()
        }

    });


//Onclick funtion for resort buttons, opens map and accesses weather and liftie api

$(document).on('click', '.resort-buttons', function()
{ 

    //place and state are unique for each button
    let place = $(this).attr('data-name');
    let state = $(this).attr('data-state');
    let liftieID = $(this).attr('data-id');

    $('#list').empty();

    getResort(place);

    weatherAPI(null, place, state, liftieID);
});

function weatherAPI (searchPlace, place, state, liftieID){

    if (searchPlace === null){

            let apiKeyGeo = "AIzaSyC_AXkLRiDbkJwyfbAFjyV_F5FeavMdqOs";

            let queryURLGeo = "https://maps.googleapis.com/maps/api/geocode/json?address="+ place + state + "&key=" + apiKeyGeo;

            let apiLiftieURL = "https://cors-anywhere.herokuapp.com/https://liftie.info/api/resort/" + liftieID;

            $.ajax({

                url: apiLiftieURL,

                type: "GET"

                    }).done(response => {

                    console.log(response);

                    });


             $.ajax({

                    url: queryURLGeo,

                    type: "GET"

                }).done(response => {

                        let lattitude = response.results[0].geometry.location.lat;

                        let longitude = response.results[0].geometry.location.lng;

                        console.log(lattitude, longitude);

                        let apiKeyWeather = "&APPID=5177a7e3f7a42cff3fe728e088dd8b0d";

                        let queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?lat="+ lattitude + "&" + "lon="+ longitude + apiKeyWeather + "&units=imperial";

                            $.ajax({

                                url: queryURLWeather,

                                type: "GET"

                             }).done(response => {

                                console.log(queryURLWeather);

                                let currentTemp = response.main.temp;

                                let currentWind = response.wind.speed;

                                let icon = response.weather[0].icon

                                let iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

                                let weatherDiscrption = capitalizeWords(response.weather[0].description);

                                let sunriseTime = new Date(response.sys.sunrise *1000);

                                let sunsetTime = new Date(response.sys.sunset *1000);

                                 $("#list").append(`<input type='button' class='back-button' style="" data-place='${state}' value=Back /><h1 class='animated fadeIn'>${place}<br>Weather Info</h1>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText desc'>${weatherDiscrption}<br><img class='animated fadeIn weatherIcon' src= ${iconURL} alt= ${weatherDiscrption}></img></h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Current Temp: ${Math.floor(currentTemp)}°F</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Current Wind Speed: ${Math.floor(currentWind)}MPH</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Sunrise:<br>${sunriseTime.toLocaleString()} (MST)</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Sunset:<br>${sunsetTime.toLocaleString()} (MST)</h3>`);


                            });

                });

        }

    else {

        let apiKeyGeo = "AIzaSyC_AXkLRiDbkJwyfbAFjyV_F5FeavMdqOs";

        let queryURLGeo = "https://maps.googleapis.com/maps/api/geocode/json?address="+ searchPlace + "&key=" + apiKeyGeo;
        

                $.ajax({

                    url: queryURLGeo,

                    type: "GET"

                }).done(response => {

                        let lattitude = response.results[0].geometry.location.lat;

                        let longitude = response.results[0].geometry.location.lng;

                        console.log(lattitude, longitude);

                        let apiKeyWeather = "&APPID=5177a7e3f7a42cff3fe728e088dd8b0d";

                        let queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?lat="+ lattitude + "&" + "lon="+ longitude + apiKeyWeather + "&units=imperial";

                            $.ajax({

                                url: queryURLWeather,

                                type: "GET"

                             }).done(response => {

                                console.log(queryURLWeather);

                                let currentTemp = response.main.temp;

                                let currentWind = response.wind.speed;

                                let icon = response.weather[0].icon

                                let iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

                                let weatherDiscrption = capitalizeWords(response.weather[0].description);

                                let sunriseTime = new Date(response.sys.sunrise *1000);

                                let sunsetTime = new Date(response.sys.sunset *1000);

                                $("#list").append(`<h3 class='animated fadeIn weatherText desc'>${weatherDiscrption}<br><img class='animated fadeIn weatherIcon' src= ${iconURL} alt= ${weatherDiscrption}></img></h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Current Temp: ${Math.floor(currentTemp)}°F</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Current Wind Speed: ${Math.floor(currentWind)}MPH</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Sunrise:<br>${sunriseTime.toLocaleString()} (MST)</h3>`);
                                $("#list").append(`<h3 class='animated fadeIn weatherText'>Sunset:<br>${sunsetTime.toLocaleString()} (MST)</h3>`);


                            });

                });

            };
        }

    
});