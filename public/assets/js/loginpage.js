// JS functionality for the Sign In Button

var button = document.getElementById('mainButton');

var openForm = function () {
	button.className = "active";
};

var checkInput = function (input) {
	if (input.value.length > 0) {
		input.className = "active";
	} else {
		input.className = '';
	}
};

var closeForm = function () {
	button.className = '';
};

document.addEventListener("keyup", function (e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		closeForm();
	}
});
// JS functionality for the Create Account Button
$("#createAccountButton").on("click", function() {
	event.preventDefault();
	window.location.href = "/create"
    console.log("clicked")
});