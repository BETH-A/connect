var db = require("../models/index.js");

module.exports = function (app) {
  app.get("/", function (request, response) {
    // db.Survey.findAll({
    //   include: [db.User] 
    // })
    // .then((data) => { 
    //   let hbsObject = {
    //     user: data
    //   };
    response.render("login");
    // }).catch((error) => { 
    //   console.log(error);
  });
  // });

  app.get("/create", function (request, response) {
    response.render("create");
  });
  app.get("/survey/:id", function (request, response) {
    console.log("==================");
    console.log(request.params.id);
    response.render("survey", {
      user_id: request.params.id
    });
  });

  // app.get("/survey", function(request, response) {
  //   response.render("survey");
  // });

  app.get("/wall/:id", function (request, response) {
    console.log("==================");
    console.log(request.params.id);
    response.render("wall", {
      user_id: request.params.id
    });
  });
  app.get("/profile", function (request, response) {
    response.render("profile");
  });
};