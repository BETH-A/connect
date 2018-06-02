console.log("connection");

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
    url: "api/addNew",
    data: person,
    success: function (data) {
      console.log("---------------MESSAGE-----------");
      console.log(data.id);
      window.location.href = ("/survey/" + data.id);
    }
  });

})