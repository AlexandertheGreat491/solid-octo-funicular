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
var getUserMoviesErrorEl = document.createElement("p");

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
        console.log(movieTitleValue);
    } else {
        console.log("errorhere");
        errorMessageEl.textContent = 'Please enter a valid movie title.';
        moviesContainerEl.appendChild(errorMessageEl);
    }

}

// Requests results from the OMDB API for the user.

var getUserMovies = function(title, year, plot, json, xml) {
    var myapiUrl = ("http://www.omdbapi.com/?apikey=5385144e&t" + title + "&y=" + year + plot + "&r=" + json + xml);
    // OMDB API fetch request
    fetch(myapiUrl).then(function (response){
if (response.ok) {
    console.log(response);
    response.json().then(function (data){
        console.log(data);
        //display(data, title, year, plot, json, xml);
    });
} else {
    getUserMoviesErrorEl.textContent = 'Sorry, we were unable to retrieve your search results.';
}
    })

}

// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);









