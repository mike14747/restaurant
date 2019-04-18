"use strict";

var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var hasTable = [
    {
        name: "user name",
        phone: 2162162169,
        email: "user@usermail.com",
        id: 2154
    },
    {
        name: "SECOND user name",
        phone: 2162161111,
        email: "user2@usermail.com",
        id: 2157
    }
];

var waitingList = [
    {
        name: "user name WAITING 1",
        phone: 2162162169,
        email: "user@usermail.com",
        id: 2152
    },
    {
        name: "SECOND user name WAITING 2",
        phone: 2162161111,
        email: "user2@usermail.com",
        id: 2151
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
    // res.send("home.html");
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
    // res.send("home.html");
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
    // res.send("tables.html");
});

app.get("/clear", function (req, res) {
    hasTable = [];
    waitingList = [];
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
    // res.send("reserve.html");
});
//----------------------  JSON RESPONSE ENDPOINTS-----------------------------------

app.get("/api/tables", function (req, res) {
    return res.json(hasTable);
});

app.get("/api/reserve", function (req, res) {
    return res.json(waitingList);
});

app.post("/api/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var reservation = req.body;

    // console.log(reservation);

    if (hasTable.length < 5) {
        hasTable.push(reservation);
        return true;
    } else {
        waitingList.push(reservation);
        return false;
    }
});

//----------------------------------------------------------------------------------

app.get("*", function (req, res) {
    res.status(404).send("<h1>This page does not exist!</h1>");
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});