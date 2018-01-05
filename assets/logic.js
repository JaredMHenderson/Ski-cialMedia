// TODO-
// Research how to share a firebase database


$(function(){

    // array of resorts that show up when each state Button is clicked
    let coloradoResorts = ["Keystone", "Copper Mountain", "Loveland", "Monarch", "Arapahoe Basin", "Crested Butte", "Vail"];
    let utahResorts = ["Beaver Mountain", "Brighton Ski Resort", "Dear Valley", "Sundance Resort", "Solitude Mountain"];
    let centralCaResorts = ["Mammoth Mountain", "Badger Pass", "Dodge Ridge", "China Peak"];
    let northernCaResorts = ["Bear Valley", "Boreal Mountain Resort", "Dodge Ridge", "Donner Ski Ranch", "Heavenly Mountain"];

//on click function for colorado button

$('#colorado-button').on("click",function(){
    // alert("colorado was clicked");
    $("#list").empty();
    $("#list").append(`<h1 class="animated fadeIn">Colorado Resorts</h1>`);
    $('#list').css('background-image', 'url("./assets/images/jorg-angeli-406235.jpg")');

    for (var i = 0; i < coloradoResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp" id='${coloradoResorts[i]}'>${coloradoResorts[i]}</button><div>`);
    };
    

    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort+Colorado&zoom=7" allowfullscreen>
        </iframe>`);
});

//on click function for utah button

$('#utah-button').on("click", function(){
    // alert('utah was clicked');
    $("#list").empty();
    $("#list").append(`<h1 class="animated fadeIn">Utah Resorts</h1>`);
    for (var i = 0; i < utahResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp" data-index='${i}'>${utahResorts[i]}</button></div>`);
    };

    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort+Utah&zoom=7" allowfullscreen>
        </iframe>`);
});

//on click function for central CA button

$('#central-california-button').on("click", function () {
    // alert('CA was clicked');
    $("#list").empty();
    $("#list").append(`<h1 class="animated fadeIn">Central Califorian Resorts</h1>`);
    for (var i = 0; i < centralCaResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp" id='${centralCaResorts[i]}'>${centralCaResorts[i]}</button></div>`);
    };

    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Central+California&zoom=7" allowfullscreen>
        </iframe>`);
    });


    //on click function for northern CA button
$('#northern-california-button').on("click", function () {
        // alert('CA was clicked');
    $("#list").empty();
    $("#list").append(`<h1>Northern California Resorts</h1>`);
    for (var i = 0; i < northernCaResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp" data-index='${i}'>${northernCaResorts[i]}</button></div>`);
    };

    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Northern+California&zoom=7" allowfullscreen>
        </iframe>`);
    });

});






