let defaultLocations = ["Vail", "Breckenridge", "Mammoth", "Keystone", "Heavenly", "Steamboat Springs"];



// on click event that loads in text of clicked link from array to push to the api
function currentWeather() {

        let skiTown = "Breckenridge";//$(this).attr("town"); breck id = 5414872

        let apiKey = "&APPID=5177a7e3f7a42cff3fe728e088dd8b0d";

        let queryURL = "http://api.openweathermap.org/data/2.5/group?id=5582371,5370006,5427299,5414872,4178560,5398440,5412230" + apiKey + "&units=imperial";



$.ajax({
        url: queryURL,

        type: "GET"

        }).done(response => {

        console.log(response);

        console.log(queryURL);

        let cityArray = [response.list];

        for (i = 0; i < cityArray.length; i++) {

                for (j = 0; j < cityArray[i].length; j++) {

                        let cities = cityArray[i][j];

                        let mainConditions = cities.wind.speed;

                        let mainTemp = cities.main.temp

                        $('.city').append(`<div class="col-lg-3 col-md-3 col-sm-3 temp windSpeed" style="border:solid black; height: 200px; margin-top: 10px">

                                <h3> Current Weather for: ${cities.name}</h3>

                                <h3>Current Tempature: ${Math.floor(mainTemp)}°F</h3>

                                <h3>Wind Speed: ${Math.floor(mainConditions)}mph</h3></div>`);
                        
        console.log(cities);
    }
}

        });
};

currentWeather();