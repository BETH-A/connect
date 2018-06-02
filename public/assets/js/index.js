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
var createButton = document.getElementById('createAccountButton');

var openCreateForm = function () {
	createButton.className = "active";
};

var checkCreateInput = function (input) {
	if (input.value.length > 0) {
		input.className = "active";
	} else {
		input.className = '';
	}
};

var closeCreateForm = function () {
	createButton.className = '';
};

document.addEventListener("keyup", function (e) {
	if (e.keyCode == 27 || e.keyCode == 13) {
		closeCreateForm();
	}
});