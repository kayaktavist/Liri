require("dotenv").config();
const fs = require("fs");
const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv.splice(3).join('+');

switch (command) {
    case 'concert-this':
        axios
            .get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
            .then(function (response) {
                // console.log(response.data);

                for (let i = 0; i < response.data.length; i++) {
                    const venue = response.data[i].venue.name
                    const city = response.data[i].venue.city

                    const date = response.data[i].datetime
                    const formatDate = moment(date);

                    console.log(venue + ', ' + city + ', ' + formatDate.format('MM/DD/YY'));
                }
            });
        break;
    case 'movie-this':
        if (input === "") {
            input = "mr+nobody"
        }
        axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating" + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            });
        break;
    case 'do-what-it-says':
        fs.readFile("random.txt", "utf8", function (error, data) {

            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");

            command = dataArr[0];
            input = dataArr[1];

            song()
        });
        break;
    case 'spotify-this-song':

        if (input === "") {
            spotify
                .request('https://api.spotify.com/v1/tracks/3DYVWvPh3kGwPasp7yjahc')
                .then(function (data) {
                    console.log(data.album.artists[0].name);
                    console.log(data.album.name);
                    console.log(data.name);
                    console.log(data.preview_url);
                })
                .catch(function (err) {
                    console.error('Error occurred: ' + err);
                });

        }
        else {
            song();
        }
        break;
};

function song() {
    spotify
        .search({ type: 'track', query: input })
        .then(function (response) {
            // console.log(input);
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song: " + "'" + response.tracks.items[0].name + "'");
            console.log("Preview URL: " + response.tracks.items[0].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        });
};