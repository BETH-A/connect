var db = require("../models/index.js");

console.log("this is the api rout page")

// "use strict";

module.exports = function (app) {


  // app.get("/api/wall", (req, res) => {
  //     db.User.findAll({
  //       where: {
  //         user_name: request.body.user_name.trim(),
  //         email: request.body.email.trim(),
  //         password: request.body.password.trim(),
  //         postal_code: request.body.postal_code.trim(),
  //         status: request.body.status.trim(),
  //         field_study: request.body.field_study.trim(),
  //         pic: request.body.pic.trim(),
  //       },
  //       order: [
  //         ["id", "DESC"]
  //       ],
  //       limit: 1
  //     })
  //       .then(User => {
  //         res.json(User);
  //       });
  //   });



  app.post("/api/addSurvey", function (request, response) {

    db.Survey.create({
        a1: request.body.a1,
        a2: request.body.a2,
        a3: request.body.a3,
        a4: request.body.a4,
        a5: request.body.a5,
        UserId: request.body.UserId
      })
      .then((surveyData) => {
        
        response.json(surveyData);


        console.log(data);
                db.User.findAll({ 
                  where: {
                    user_name: request.body.user_name.trim(),
                    email: request.body.email.trim(),
                    password: request.body.password.trim(),
                    postal_code: request.body.postal_code.trim(),
                    status: request.body.status.trim(),
                    field_study: request.body.field_study.trim(),
                    pic: request.body.pic.trim(),
                  },
                  order: [
                    ["id", "DESC"]
                  ],
                  limit: 1
                })
        .then((data) => {
                  db.Survey.create({ 
                    survey: request.body.user + "survey",
                    UserId: data[0].id
                  }).then((error) => {
                    response.redirect("/wall");
                  }).catch((error) => {
                    console.log(error);
                  });
        })
        .catch((error) => {
          console.log(error);
                });
        })
        .catch((error) => {
          console.log(error);

      });
  })


  app.post("/api/addNew", function (request, response) {

    db.User.create({
        user_name: request.body.user_name,
        email: request.body.email,
        password: request.body.password,
        postal_code: request.body.postal_code,
        status: request.body.status,
        field_study: request.body.field_study,
        pic: request.body.pic
      })
      .then((data) => {
        console.log(data)

        db.User.findOne({
          where: {
            email: request.body.email.trim()
          }
        }).then((data) => {
            console.log(data.id);
            // response.send(data);
            response.json(data); /// TODO --- [ when re-direct doesn't work -- here]
          }

        );
        // .then((data) => {
        //           db.Survey.create({ 
        //             survey: request.body.user + "survey",
        //             UserId: data[0].id
        //           }).then((error) => {
        //             response.redirect("/wall");
        //           }).catch((error) => {
        //             console.log(error);
        //           });
        // // })
        // .catch((error) => {
        //   console.log(error);
        //         });
        // })
        // .catch((error) => {
        //   console.log(error);

      });
  })

  //   app.put("/api/change", function(request, response) {
  //     db.User.update({ 
  //       name: request.body.name2..val().trim(),
  //       user: request.body.user2.trim()
  //       }, {
  //         where: {
  //           id: request.body.updateId
  //         }
  //     }).then((data) => {

  //           db.Survey.update({
  //             survey: request.body.user2.trim() + "Survey"
  //           }, {
  //             where: {
  //               UserId: request.body.updateId
  //             }
  //           }).then((data) => { 
  //             response.redirect("/");
  //           }).catch((error) => {
  //             console.log(error);
  //           });

  //     }).catch((error) => {
  //       console.log(error);
  //     });
  //   });

  //   app.delete("/api/delete/:id", function(request, response) {
  //     Promise.all([
  //       db.User.destroy({
  //         where: {
  //           id: request.params.id
  //         }
  //       }),
  //       db.Survey.destroy({
  //         where: {
  //           UserId: request.params.id
  //         }
  //       })
  //     ])
  //     .then((data) => {
  //       response.redirect("/");
  //     }).catch((error) => {
  //       console.log( error);
};