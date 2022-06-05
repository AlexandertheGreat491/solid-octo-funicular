/*OMDB js*/
// Global variables
var userForm = document.querySelector('#user-form');
var movieTitleEl = document.querySelector('#enter-title');
var movieYearEl = document.querySelector('#year');
var moviePlotEl = document.querySelector('#plot-choice');
var responseTypeEl = document.querySelector('#response');
var moviesContainerEl = document.querySelector('#movies-container');
var movieSearchTerm = document.querySelector('#movie-search-term');
var submitButtonEl = document.querySelector('#submit');
var errorMessageEl = document.createElement("p");
var getUserMoviesErrorEl = document.createElement("p");

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

}


// Requests results from the OMDB API for the user.
var getUserMovies = function(movieTitleValue) {
    var myapiUrl = "http://www.omdbapi.com/?apikey=5385144e&s + title";
    // OMDB API fetch request
    fetch(myapiUrl).then(function (response){
if (response.ok) {
    console.log(response);
    response.json().then(function (data){
        console.log(data);
        displayMovies(data.items, movieTitleValue);
    });
} else {
    getUserMoviesErrorEl.textContent = 'Sorry, we were unable to retrieve your search results.';
}
    });

};

var getUserMovies = function(movieYearValue) {
var myapiUrl = "http://www.omdbapi.com/?apikey=5385144e&y + year"
fetch(myapiUrl).then(function (response){
    if (response.ok) {
console.log(response);
response.json().then(function(data){
    console.log(data);
    displayMovies(data.items, movieYearValue);
}); 
    } else {
        getUserMoviesErrorEl.textContent = 'Sorry, we were unable to retrieve your search results.';
    }
});
};


//var displayMovies = function(movieTitleValue) {

//}

// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);









