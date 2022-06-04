/*OMDB js*/
// Global variables
var userForm = document.querySelector('#user-form');
var movieTitleEl = document.querySelector('#enter-title');
var movieYear = document.querySelector('#year');
var moviePlot = document.querySelector('#plot-choice');
var responseType = document.querySelector('#response');
var moviesContainerEl = document.querySelector('#movies-container');
var movieSearchTerm = document.querySelector('#movie-search-term');
var submitButtonEl = document.querySelector('#submit');
var errorMessageEl = document.createElement("p");

var sumbitSearchHandler = function (event) {
    event.preventDefault();

    var movieTitleValue = movieTitleEl.value.trim();
    var mYear = movieYear.value.trim();
    var mPlot = moviePlot.value.trim();
    var mResponse = responseType.value.trim();

    if (movieTitleValue) {
        getUserMovies(movieTitleValue);
        moviesContainerEl.textContent = '';
        movieTitleValue.value = '';
        errorMessageEl.textContent = '';
    } else {
        //console.log("errorhere");
        errorMessageEl.textContent = 'Please enter a valid movie title';
        moviesContainerEl.appendChild(errorMessageEl);
    }

}


//getUserMovies
var getUserMovies = function() {

}


// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);









