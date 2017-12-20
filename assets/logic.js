// alert('working');

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