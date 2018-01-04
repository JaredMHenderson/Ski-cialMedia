// TODO-
// Research how to share a firebase database


// array of resorts that show up when Colorado Button is clicked
let coloradoResorts = ["Keystone", "Copper Mountain", "Loveland", "Monarch", "Arapahoe Basin"]



$(function(){

//on click function for colorado button

$('#colorado-button').on("click",function(){
    // alert("colorado was clicked");
    // $('#map').addClass('fadeIn');
    $("#list").empty();
    for (var i = 0; i < coloradoResorts.length; i++) {

        $("#list").append(`<button data-index='${i}'>${coloradoResorts[i]}</button>`);
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
        $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Northern+California&zoom=7" allowfullscreen>
        </iframe>`);
    });

});






