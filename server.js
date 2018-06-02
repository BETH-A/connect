// classmates server setup - database connection
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var methodOverride = require("method-override");

var port = process.env.PORT || 8080;

// Method override for RESTFul form submissions
app.use(methodOverride("_method"));

app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(express.static("public"));

app.use(bodyParser.text()); //parses text

// Note
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connection to database
var db = require("./models")

// DO NOT ERASE 
// // ============================================

// require("./routes/html-routes.js")(app);
// require("./routes/users-routes.js")(app);

// // ============================================


// more testing --- // DO NOT ERASE // 
//=========================================

require("./controllers/html-routes.js")(app);
require("./controllers/api-routes.js")(app);

// ======================================


// DO NOT ERASE //
// var routes = require("./controllers/users_controllers.js");

//DO NOT ERASE //
// app.use(routes);
// // {force:true}

db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log("Node app is running on port 8080");
    });    
})

