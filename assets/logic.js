

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

// TODO-
// Research how to share a firebase database


$(function(){

    // array of resorts that show up when each state Button is clicked
    let coloradoResorts = ["Keystone", "Copper Mountain", "Loveland", "Monarch", "Arapahoe Basin", "Crested Butte", "Vail"];
    let utahResorts = ["Beaver Mountain", "Brighton Ski Resort", "Dear Valley", "Sundance Resort", "Solitude Mountain"];
    let centralCaResorts = ["Mammoth Mountain", "Badger Pass", "Dodge Ridge", "China Peak"];
    let northernCaResorts = ["Bear Valley", "Boreal Mountain Resort", "Dodge Ridge", "Donner Ski Ranch", "Heavenly Mountain"];
    let userButtons = [];

//on click function for colorado button
function coloradoButtonClick () {
    $("#list").empty().removeClass('centralCaBgImage northernCaBgImage utahBgImage weatherText').addClass('coloradoBgImage').append(`<h1 class="animated fadeIn">Colorado Resorts</h1>`);

    // creates a button for each resort in the array and gives it a unique id with the name of the resort

    for (var i = 0; i < coloradoResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Colorado" 
            data-name='${coloradoResorts[i]}'>${coloradoResorts[i]}</button><div>`);
    };

    // adds the map of resorts

    setTimeout(() => {
        $('iframe').addClass('animated fadeIn');
    }, 1000);
    $('#map').html(`<iframe
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort+Colorado&zoom=7" allowfullscreen>
        </iframe>`);
};
    $('#colorado-button').on("click", coloradoButtonClick);

//on click function for utah button
    function utahButtonClick() {
        $("#list").empty().removeClass('coloradoBgImage centralCaBgImage northernCaBgImage weatherText').addClass('utahBgImage').append(`<h1 class="animated fadeIn">Utah Resorts</h1>`);

        for (var i = 0; i < utahResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Utah" data-name='${utahResorts[i]}'>${utahResorts[i]}</button></div>`);
        };

        // adds the map of resorts
        setTimeout(() => {
            $('iframe').addClass('animated fadeIn');
        }, 1000);
        $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort+Utah&zoom=7" allowfullscreen>
        </iframe>`);
    };
    $('#utah-button').on("click", utahButtonClick);

//on click function for central CA button
    function centralCaButtonClick(){

        $("#list").empty().removeClass('coloradoBgImage utahCaBgImage northernCaBgImage weatherText').addClass('centralCaBgImage').append(`<h1 class="animated fadeIn">Central California Resorts</h1>`);

        for (var i = 0; i < centralCaResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Central California" data-name='${centralCaResorts[i]}'>${centralCaResorts[i]}</button></div>`);
        };

        $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Central+California&zoom=7" allowfullscreen>
        </iframe>`);
    };
$('#central-california-button').on("click", centralCaButtonClick);


    //on click function for northern CA button
    function northernCaButtonClick(){
        $("#list").empty().removeClass('coloradoBgImage utahCaBgImage centralCaBgImage weatherText').addClass('northernCaBgImage').append(`<h1 class="animated fadeIn">Northern California Resorts</h1>`);
        for (var i = 0; i < northernCaResorts.length; i++) {

            $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Northern California" data-name='${northernCaResorts[i]}'>${northernCaResorts[i]}</button></div>`);
        };

        $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Northern+California&zoom=7" allowfullscreen>
        </iframe>`); 
    }

$('#northern-california-button').on("click", northernCaButtonClick) 


    //On click function for each of the resort buttons
    $(document).on('click', '.back-button', function () {
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

        else if($(this).attr('data-place') === 'null') {
            renderButtons()
        }

        $('#list').removeClass('weatherText');

    });

    function renderButtons() {

        $("#list").empty();

 
        for (let i = 0; i < userButtons.length; i++) {

            let userButton = $("<button>");
            userButton.addClass('class="animated fadeInUp resort-buttons');
            userButton.attr("data-name", userButtons[i]);
            userButton.text(userButtons[i]);
            $("#list").append('<h1 class="animated fadeIn weatherText">User Defined Areas</h1>');
            $("#list").append(userButton);
        }
    }

     $("#submit").on("click", function (event) {

        let newButton = $("#searchContent").val().trim()

        userButtons.push(newButton);

        renderButtons();

        $('input[type="text"], textarea').val('');
    });

    $(document).on('click', '.resort-buttons', function(){ 

        //place and state are unique for each button
        let place = $(this).attr('data-name');
        let state = $(this).attr('data-state');

        $('#list').empty();

        if (state != null) {

        $('#map').html(`<iframe 
            width="100%" 
            height="100%" 
            frameborder="0" 
            style="border:0" 
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=${place}+${state}&zoom=7" allowfullscreen>
            </iframe>`);
                    
        let weatherAPI = () => {

            let apiKeyGeo = "AIzaSyC_AXkLRiDbkJwyfbAFjyV_F5FeavMdqOs";

            let queryURLGeo = "https://maps.googleapis.com/maps/api/geocode/json?address="+ place + state + "&key=" + apiKeyGeo;

                $.ajax({

                    url: queryURLGeo,

                    type: "GET"

                }).done(response => {

                        console.log(queryURLGeo);

                        let lattitude = response.results[0].geometry.location.lat;

                        let longitude = response.results[0].geometry.location.lng;

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

                        let weatherDiscrption = response.weather[0].description;

                        let sunriseTime = new Date(response.sys.sunrise *1000);

                        let sunsetTime = new Date(response.sys.sunset *1000);

                        $("#list").append(`<input type='button' class='back-button' style='float: left;' data-place='${state}' value=Back /><h1 class='animated fadeIn'>${place}<br>Weather Info</h1>`);
                        $("#list").append(`<img class='animated fadeIn weatherIcon' src= ${iconURL} alt= ${icon.description}></img> <br>
                                            <h3 class='animated fadeIn'>${weatherDiscrption}</h3>`).addClass('weatherText');;
                        $("#list").append(`<h3 class='animated fadeIn'>Current Temp: ${Math.floor(currentTemp)}°F</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Current Wind Speed: ${Math.floor(currentWind)}MPH</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Sunrise:<br>${sunriseTime.toLocaleString()} (MST)</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Sunset:<br>${sunsetTime.toLocaleString()} (MST)</h3>`);


                });

                });

            };

            weatherAPI();

        }

        else {

            let weatherAPI = () => {

            $('#map').html(`<iframe 
                width="100%" 
                height="100%" 
                frameborder="0" 
                style="border:0" 
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=${place}&zoom=7" allowfullscreen>
                </iframe>`);

            let apiKeyGeo = "AIzaSyC_AXkLRiDbkJwyfbAFjyV_F5FeavMdqOs";

            let queryURLGeo = "https://maps.googleapis.com/maps/api/geocode/json?address="+ place + "&key=" + apiKeyGeo;

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

                        let weatherDiscrption = response.weather[0].description;

                        let sunriseTime = new Date(response.sys.sunrise *1000);

                        let sunsetTime = new Date(response.sys.sunset *1000);

                        $("#list").append(`<input type='button' class='back-button' style='float: left;' data-place='null' value=Back /><h1 class='animated fadeIn'>${place}<br>Weather Info</h1>`);
                        $("#list").append(`<img class='animated fadeIn weatherIcon' src= ${iconURL} alt= ${icon.description}></img> <br>
                                            <h3 class='animated fadeIn'>${weatherDiscrption}</h3>`).addClass('weatherText');;
                        $("#list").append(`<h3 class='animated fadeIn'>Current Temp: ${Math.floor(currentTemp)}°F</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Current Wind Speed: ${Math.floor(currentWind)}MPH</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Sunrise:<br>${sunriseTime.toLocaleString()} (MST)</h3>`);
                        $("#list").append(`<h3 class='animated fadeIn'>Sunset:<br>${sunsetTime.toLocaleString()} (MST)</h3>`);


                });

                });

            };

            weatherAPI();

        }
    
    });

});