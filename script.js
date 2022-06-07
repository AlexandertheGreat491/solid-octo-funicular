/*OMDB js*/

// Global variables

var batmanrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";
var jokerrequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Joker&plot=full"
var starwarsrequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Star+Wars&plot=full"
var playeronerequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Ready+Player+One&plot=full"
var submitButtonEl = document.querySelector('#submit');
var randomMovieArray = ['Batman', 'Joker', 'Star Wars', 'Ready Player One'];
var randomNumber = Math.floor(Math.random() * randomMovieArray.length);
console.log(randomNumber)
var movieDetailsEl = document.querySelector('#json');


// Handles the json results after the Submit button is clicked by the user and then results are displayed in the html.

var sumbitSearchHandler = function (event) {
    var url = '';
    var randomMovie = randomMovieArray[randomNumber]
    // Conditions
    if (randomMovie === "Star Wars") {
        url = starwarsrequestUrl
    } else if (randomMovie === "Ready Player One") {
        url = playeronerequestUrl
    } else if (randomMovie === "Batman") {
        url = batmanrequestUrl
    } else if (randomMovie === "Joker") {
        url = jokerrequestUrl
    }


    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.Title);
            // title
            var movieTitle = data.Title;
            var titleEl = document.createElement("h2");
            titleEl.style.fontSize = "1.875em";
            titleEl.innerHTML = movieTitle;
            movieDetailsEl.append(titleEl);
            // year
            var movieYear = data.Year;
            var yearEl = document.createElement("p");
            yearEl.style.fontSize = "1.25em";
            yearEl.innerHTML = movieYear;
            movieDetailsEl.append(yearEl);
            // released
            var releaseDate = data.Released;
            var releaseEl = document.createElement("p");
            releaseEl.style.fontSize = "1.25em";
            releaseEl.innerHTML = releaseDate;
            movieDetailsEl.append(releaseEl);


        });




    }


// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);
