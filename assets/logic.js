
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

