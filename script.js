/*OMDB js*/
// Global variables
var userForm = document.querySelector('#user-form');
var movieTitle = document.querySelector('#enter-title');
var movieYear = document.querySelector('#year');
var moviePlot = document.querySelector('#plot-choice');
var responseType = document.querySelector('#response');


var sumbitSearchHandler = function (event){
    
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










