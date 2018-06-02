console.log("connection - wall");

$("#create-form").on("click", function (event) {
  event.preventDefault();

  var user_name = $("#user_name.form-control").val();
  var email = $("#email.form-control").val();
  var password = $("#password.form-control").val();
  var postal_code = $("#postal_code.form-control").val();
  var status = $("#status.form-control").val();
  var field_study = $("#field_study.form-control").val();
  var pic = $("#pic.form-control").val();

  //creating a new account to pass to the database
  var person = {
    user_name: user_name,
    email: email,
    password: password,
    postal_code: postal_code,
    status: status,
    field_study: field_study,
    pic: pic


  };
  console.log(person)

  $.ajax({
    type: "POST",
    url: "api/addSurvey",
    data: survey,
    success: function (data) {
      console.log("---------------MESSAGE-----------");
      console.log(data.id);
      window.location.href = ("/wall/" + data.id);
    }
  });
})

// });

// Make a get request to our api route that will return every book
$.get("/wall/:id/", function (data) {
  console.log(data + "this is our USER!!!")
  
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
  
    // Create a parent div to hold book data
    var wellSection = $("<div>");
  
    // Add a class to this div: 'well'
    wellSection.addClass("well");
  
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "book-well-" + i);
  
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
    $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
  }
});

//  weather api
var weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=32825,us&units=imperial&APPID=dd4bcd5a220ae9163c6f6be889b80815";

$.ajax({
  url: weatherApi,
  method: "GET"
}).then(function (response) {

  console.log(response);
  console.log(response.results);

  var temp = response.main.temp;
  var weather = response.weather[0].main;
  var city = response.name;

  $(".weather").append(city + " " + temp + " &deg;F " + weather);
  console.log(response.city)

});