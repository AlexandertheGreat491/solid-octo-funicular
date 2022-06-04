/*OMDB js*/
// Global variables
var userForm = document.querySelector('#user-form');
var movieTitle = document.querySelector('#enter-title');
var movieYear = document.querySelector('#year');
var moviePlot = document.querySelector('#plot-choice');
var responseType = document.querySelector('#response');
var moviesContainerEl = document.querySelector('#movies-container');
var movieSearchTerm = document.querySelector('#movie-search-term');

var sumbitSearchHandler = function (event){
    event.preventDefault();

    var enterTitle = movieTitle.value.trim();
    var mYear = movieYear.value.trim();
    var mPlot = moviePlot.value.trim();
    var mResponse = responseType.value.trim();

    if (enter-title) {
        getUserMovies(enter-title);

    }

}
// Batman

var requestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


// Joker
var requestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Joker&plot=full";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });










