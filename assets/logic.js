

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

//on click function for colorado button

$('#colorado-button').on("click",function(){
    $("#list").empty().removeClass('centralCaBgImage utahBgImage' ).addClass('coloradoBgImage').append(`<h1 class="animated fadeIn">Colorado Resorts</h1>`);
    
// creates a button for each resort in the array and gives it a unique id with the name of the resort
    for (var i = 0; i < coloradoResorts.length; i++) {
        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Colorado" data-name='${coloradoResorts[i]}' id='${coloradoResorts[i]}'>${coloradoResorts[i]}</button><div>`);
    };
    
// adds the map of resorts

    // $('#map').removeClass('animated fadeIn').addClass('animated fadeIn').html(`<iframe 
    //     width="100%" 
    //     height="100%" 
    //     frameborder="0" 
    //     style="border:0" 
    //     src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort+Colorado&zoom=7" allowfullscreen>
    //     </iframe>`);
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
    
});

//on click function for utah button

$('#utah-button').on("click", function(){
    $("#list").empty().removeClass('coloradoBgImage centralCaBgImage', ).addClass('utahBgImage').append(`<h1 class="animated fadeIn">Utah Resorts</h1>`);
   
    for (var i = 0; i < utahResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="Utah" data-name='${utahResorts[i]}'>${utahResorts[i]}</button></div>`);
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
    $("#list").empty().addClass('centralCaBgImage').append(`<h1 class="animated fadeIn">Central California Resorts</h1>`);
    
    for (var i = 0; i < centralCaResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-state="California" data-name='${centralCaResorts[i]} id='${centralCaResorts[i]}'>${centralCaResorts[i]}</button></div>`);
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
    $("#list").empty();
    $("#list").append(`<h1 class="animated fadeIn">Northern California Resorts</h1>`);
    for (var i = 0; i < northernCaResorts.length; i++) {

        $("#list").append(`<div><button class="animated fadeInUp resort-buttons" data-index='${i}'>${northernCaResorts[i]}</button></div>`);
    };

    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=Ski+Resort,Northern+California&zoom=7" allowfullscreen>
        </iframe>`);
    });

    $(document).on('click', '.resort-buttons', function(){
        $("#list").empty().addClass('coloradoBgImage').append(`<h1 class="animated fadeIn">Keystone Info</h1>`); 
        let place = $(this).attr('data-name');
        let state = $(this).attr('data-state');
    $('#map').html(`<iframe 
        width="100%" 
        height="100%" 
        frameborder="0" 
        style="border:0" 
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDbyddmrqW7wONDFRt9o54qgXBEcc7lMf8&q=${place}+${state}&zoom=7" allowfullscreen>
        </iframe>`);
    
    });

});


