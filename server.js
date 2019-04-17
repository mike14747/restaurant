"use strict";

var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var hasTable = [];
var waitingList = [];

app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "./home.html"));
    res.send("home.html");
});

app.get("/home", function (req, res) {
    // res.sendFile(path.join(__dirname, "./home.html"));
    res.send("home.html");
});

app.get("/tables", function (req, res) {
    // res.sendFile(path.join(__dirname, "./tables.html"));
    res.send("tables.html");
});

app.get("/reserve", function (req, res) {
    // res.sendFile(path.join(__dirname, "./reserve.html"));
    res.send("reserve.html");
});
//----------------------  JSON RESPONSE ENDPOINTS-----------------------------------

app.get("/api/tables", function(req, res) {
    return res.json(hasTable);
});

app.get("/api/reserve", function(req, res) {
    return res.json(waitingList);
});

//----------------------------------------------------------------------------------

app.get("*", function (req, res) {
    res.status(404).send("<h1>This page does not exist!</h1>");
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});