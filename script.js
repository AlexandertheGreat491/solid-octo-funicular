/*OMDB js starts*/

// Global variables

var batmanrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";
var jokerrequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Joker&plot=full"
var starwarsrequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Star+Wars&plot=full"
var playeronerequestUrl = "http://www.omdbapi.com/?apikey=5385144e&t=Ready+Player+One&plot=full"
var submitButtonEl = document.querySelector('#submit');
var resetButtonEl = document.querySelector('#reset');
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
            // runtime
            var runTime = data.Runtime;
            var runTimeEl = document.createElement("p");
            runTimeEl.style.fontSize = "1.25em";
            runTimeEl.innerHTML = runTime;
            movieDetailsEl.append(runTimeEl);
            // genre
            var whatGenre = data.Genre;
            var genreEl = document.createElement("p");
            genreEl.style.fontSize = "1.25em";
            genreEl.innerHTML = whatGenre;
            movieDetailsEl.append(genreEl);
            // director
            var movieDirector = data.Director;
            var directorEl = document.createElement("p");
            directorEl.style.fontSize = "1.25em";
            directorEl.innerHTML = movieDirector;
            movieDetailsEl.append(directorEl);
            // writer
            var movieWriter = data.Writer;
            var writerEl = document.createElement("p");
            writerEl.style.fontSize = "1.25em";
            writerEl.innerHTML = movieWriter;
            movieDetailsEl.append(writerEl);
            // actors
            var movieActors = data.Actors;
            var actorsEl = document.createElement("p");
            actorsEl.style.fontSize = "1.25em";
            actorsEl.innerHTML = movieActors;
            movieDetailsEl.append(actorsEl);
            // plot
            var moviePlot = data.Plot;
            var plotEl = document.createElement("textarea");
            plotEl.style.fontSize = "1.25em";
            plotEl.innerHTML = moviePlot;
            movieDetailsEl.append(plotEl);
            // language
            var movieLanguage = data.Language;
            var languageEl = document.createElement("p");
            languageEl.style.fontSize = "1.25em";
            languageEl.innerHTML = movieLanguage;
            movieDetailsEl.append(languageEl);
            // country
            var movieCountry = data.Country;
            var countryEl = document.createElement("p");
            countryEl.style.fontSize = "1.25em";
            countryEl.innerHTML = movieCountry;
            movieDetailsEl.append(countryEl);
            // awards
            var movieAwards = data.Awards;
            var awardsEl = document.createElement("p");
            awardsEl.style.fontSize = "1.25em";
            awardsEl.innerHTML = movieAwards;
            movieDetailsEl.append(awardsEl);
            
            // localStorage
            
            localStorage.setItem(movieTitle, data.Title);
            localStorage.setItem(movieYear, data.Year);
            localStorage.setItem(releaseDate, data.Released);
            localStorage.setItem(runTime, data.Runtime);
            localStorage.setItem(whatGenre, data.Genre);
            localStorage.setItem(movieDirector, data.Director);
            localStorage.setItem(movieWriter, data.Writer);
            localStoragae.setItem(movieActors, data.Actors);
            localStorage.setItem(moviePlot, data.Plot);
            localStorage.setItem(movieLanguage, data.Language);
            localStorage.setItem(movieCountry, data.Country);
            localStorage.setItem(movieAwards, data.Awards);
            

        });




}


// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);

// Reset button event listener
// Get help during office hours
resetButtonEl.addEventListener('click', url);

/*OMDB js ends*/