const path = require("path");
const express = require("express");
const app = express();
const port = "8080"

const userImages = { uimages: ["images/book.png", "images/help.png", "images/dropdown_arrow.png"] }
const stationImages = { simages: ["images/book.png", "images/help.png", "images/dropdown_arrow.png"] }

const topStations = [
    {url:"/station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"/station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"}
]
const favoriteStations = [
    {url:"/station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"/station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"}
]
const recStations = [
    {url:"/station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"/station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"/station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"}
]

const likedStations = [
    {url:"station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder.jpg", name:"Station Name", dj:"DJ"}, 
    {url:"station", img:"images/station_placeholder_two.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_three.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_four.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_five.jpg", name:"Station Name", dj:"DJ"},
    {url:"station", img:"images/station_placeholder_six.jpg", name:"Station Name", dj:"DJ"}
]
const info = {
    userImages : userImages,
    stationimages : stationImages,
    topStations : topStations,
    favoriteStations : favoriteStations,
    recStations : recStations
}

const info2 = {
    likedStations : likedStations
}


app.use(express.static(__dirname + '/public'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home.ejs", info);
});

app.get("/likes", function (req, res) {
    res.render("likes.ejs", info2);
});

app.get("/preferences", function (req, res) {
    res.render("preferences.ejs");
});

app.get("/recommendations", function (req, res) {
    res.render("recommended.ejs", info2);
});

app.get("/station", function (req, res) {
    res.render("station.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})