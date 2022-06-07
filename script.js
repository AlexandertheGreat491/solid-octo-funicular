/*OMDB js*/

// Global variables
var requestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";
var submitButtonEl = document.querySelector('#submit');

//handles the json results
var sumbitSearchHandler = function (event){
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    displayBatman(data)
  });
  

function displayBatman(data) {
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    var data = {
        "data": {
        "Title": "Batman",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "23 Jun 1989",
        "Runtime": "126 min",
        "Genre": "Action, Adventure",
        "Director": "Tim Burton",
        "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
        "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",
        "Plot": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton).\nGrissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane...\nAfter falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. \n However, he soon reappears as The Joker and starts a reign of terror in Gotham City.\nMeanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman.\nShe soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.",
        "Language": "English, French, Spanish",
        "Country": "United States, United Kingdom",
        "Awards": "Won 1 Oscar. 9 wins & 26 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "72%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "7.5",
        "imdbVotes": "371,227",
        "imdbID": "tt0096895",
        "Type": "movie",
        "DVD": "22 Aug 1997",
        "BoxOffice": "$251,409,241",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True" }
    };  
}

document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);

  }
}

// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);
