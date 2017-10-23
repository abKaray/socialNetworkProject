var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var registration = require("./metHods/registration");
var entrence = require("./metHods/entrance");
var message = require("./metHods/message");
var getId = require("./metHods/getID");
var post = require("./metHods/post");

var app = express();

app.use(express.static(__dirname + "/public"));
var parse = bodyParser.json();

app.use(session({secret: "Alex"}));

app.post("/reg", parse,  registration.post);

app.post("/", parse, entrence.entry);

app.post("/sendMessage", parse, message.message);

app.post("/sendPost", parse, post.sendPost);

app.get("/mainPage", function (req, res) {
    if(req.session.email) {
        res.sendFile("/Users/aleksander/WebstormProjects/web-academy/public/academy/mainPage.html");
    }
});

app.post("/mainMsg", parse, getId.getID);
app.get("/minMessage", function (req, res) {
    res.sendFile("/Users/aleksander/WebstormProjects/web-academy/public/academy/minMessage.html");
});
app.post("/mainFrnd", parse, getId.getID);
app.get("/friendsList", function (req, res) {
    res.sendFile("/Users/aleksander/WebstormProjects/web-academy/public/academy/friendsList.html");
});
app.post("/mainPag", parse, getId.getID);
app.post("/fullMsg", parse, getId.getID);

app.get("/fullMessage", function (req, res) {
    res.sendFile("/Users/aleksander/WebstormProjects/web-academy/public/academy/fullMessage.html");
});


app.listen(7778);