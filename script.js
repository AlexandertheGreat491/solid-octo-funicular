/*OMDB js*/
// Global variables
var userForm = document.querySelector('#user-form');
var movieTitleEl = document.querySelector('#enter-title');
var movieYearEl = document.querySelector('#year');
var moviePlotEl = document.querySelector('#plot-choice');
var responseTypeEl = document.querySelector('#response');
var moviesContainerEl = document.querySelector('#movies-container');
var movieSearchTerm = document.querySelector('#movie-search-term');
var movieSearchTermEl = document.createElement("ul");
var submitButtonEl = document.querySelector('#submit');
var errorMessageEl = document.createElement("p");
var getUserMoviesErrorEl = document.createElement("p");
var displayMoviesEl = document.createElement("p");


var sumbitSearchHandler = function (event) {
    event.preventDefault();

    var movieTitleValue = movieTitleEl.value.trim();
    var movieYearValue = movieYearEl.value.trim();
    var moviePlotValue = moviePlotEl.value.trim();
    var responseTypeValue = responseTypeEl.value.trim();

    if (movieTitleValue) {
        getUserMovies(movieTitleValue);
        moviesContainerEl.textContent = '';
        movieTitleValue.value = '';
        errorMessageEl.textContent = '';
        console.log(movieTitleValue);
    } else {
        console.log("errorhere");
        errorMessageEl.textContent = 'Please enter a valid movie title.';
        moviesContainerEl.appendChild(errorMessageEl);
    }
    if (movieYearValue) {
        getUserMovies(movieYearValue);
        movieYearEl.textContent = '';
        movieYearValue.value = '';
        errorMessageEl.textContent = '';
        console.log(movieYearValue);
    } else {
        console.log("errorhere");
        errorMessageEl.textContent = 'Please enter a valid year.';
        movieYearEl.appendChild(errorMessageEl);
    }
    if (moviePlotValue) {
        getUserMovies(moviePlotValue);
        moviePlotEl.textContent = '';
        moviePlotValue.value = '';
        errorMessageEl.textContent = '';
        console.log(moviePlotValue);
    } else {
        console.log("errorhere");
        errorMessageEl.textContent = 'Please enter valid plot type.';
    }
    if (responseTypeValue) {
        getUserMovies(responseTypeValue);
        responseTypeEl.textContent = '';
        responseTypeValue.value = '';
        errorMessageEl.textContent = '';
        console.log(responseTypeValue);
    } else {
        console.log("errorhere");
        errorMessageEl.textContent = 'Please enter a valid response type: JSON or XML.'
    }
    
}


// Requests results from the OMDB API for the user.
var getUserMovies = function (movieTitleValue) {
    var myapiUrl = ("http://www.omdbapi.com/?apikey=be881b6b&t");

    fetch(myapiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json(); 
        } else {
            console.log(getUserMoviesErrorEl);
            getUserMoviesErrorEl.textContent = 'Sorry, we were unable to retrieve your search results.';
        }
    })
    .then(function(movieSearchTerm){
        var movieSearchTerm = movieTitleValue;
        //console.log(data);
        movieSearchTerm(movieTitleValue)
    })

};


/*var displayMovies = function(movieTitleValue, movieSearchTerm) {
    if (movieTitleValue === movieSearchTerm) {
    displayMoviesEl = movieSearchTerm;
    } else {

    }
    }*/


// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);


