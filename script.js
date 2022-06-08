
// google programmable search engine api
var searchInput
var websitesEl = document.getElementById("websites");
var googleFormEl = document.getElementById("google-form");
var googleSearch = document.getElementById("google-search");

// get from input data
var googleFormHandler = function (event) {
    event.preventDefault();
    searchInput = googleSearch.value.trim();
    if (searchInput) {
        getGoogleData();
        googleSearch.value = "";
    }
}

// api fetch request 
var getGoogleData = function () {
    var apiUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAiib3CHEMRsVk3qS6ybJl6ffY8yOGf9ww&cx=26e4f40d5ac7281e0&q=" + searchInput;
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            for (let i = 0; i < data.items.length; i++) {
                // list each link 
                var searchResult = document.createElement("a");
                searchResult.textContent = data.items[i].title;
                websitesEl.appendChild(searchResult);
                // make link clickable 
                var searchUrl = data.items[i].formattedUrl;
                searchResult.setAttribute("href", searchUrl);
                //add break between each list item 
                var breakLine = document.createElement("br");
                websitesEl.appendChild(breakLine)
            }
        });
    });
}

// event listener
googleFormEl.addEventListener("submit", googleFormHandler)

// end programmable google search   

/*OMDB js starts*/

// Global variables

// Movie urls start
var batmanrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";
var jokerrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Joker&plot=full"
var starwarsrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Star+Wars&plot=full"
var thepreciousUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Lord+of+the+Rings&plot=full"
var playeroneUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Ready+Player+One"
var furyUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Fury"
var frozenUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Frozen"
var lebowskiUrl = "https://www.omdbapi.com/?apikey=5385144e&t=The+Big+Lebowski"
var braveUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Braveheart"
var eliUrl = "https://www.omdbapi.com/?apikey=5385144e&t=The+Book+of+Eli"
var californiaUrl = "https://www.omdbapi.com/?apikey=5385144e&t=California+Typewriter"
var wolvesUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Dances+with+Wolves"
var conUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Con+Air"
var diamondUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Blood+Diamond"
// Movie urls end
var submitButtonEl = document.querySelector('#submit');
// Array of movies that can be displayed when the user clicks the submit button.
var randomMovieArray = ['Batman', 'Joker', 'Star Wars', 'Lord of the Rings', 'Ready Player One', 'Fury', 'Frozen', 'The Big Lebowski', 
'Braveheart', 'The Book of Eli', 'California Typewriter', 'Dances with Wolves', 'Con Air', 'Blood Diamond'];
// Sets the number of movies to the length of the randomMovieArray.
var randomNumber = Math.floor(Math.random() * randomMovieArray.length);
console.log(randomNumber)
// Gets the selector for the section of the page where the results will be displayed.
var movieDetailsEl = document.querySelector('#json');


// Handles the json results after the Submit button is clicked by the user and then results are displayed in the html.

var sumbitSearchHandler = function (event) {
    // Will use the url of a random movie.
    var url = '';
    var randomMovie = randomMovieArray[randomNumber]
    // Conditional statements to display a random movie.
    if (randomMovie === "Star Wars") {
        url = starwarsrequestUrl
    } else if (randomMovie === "Lord of the Rings") {
        url = thepreciousUrl
    }
    else if (randomMovie === "Batman") {
        url = batmanrequestUrl
    } else if (randomMovie === "Joker") {
        url = jokerrequestUrl
    } else if (randomMovie === "Ready Player One") {
        url = playeroneUrl
    } else if (randomMovie === "Fury") {
        url = furyUrl
    } else if (randomMovie === "Frozen") {
        url = frozenUrl
    } else if (randomMovie === "The Big Lebowski") {
        url = lebowskiUrl
    } else if (randomMovie === "Braveheart") {
        url = braveUrl
    } else if (randomMovie === "The Book of Eli") {
        url = eliUrl
    } else if (randomMovie === "California Typewriter") {
        url = californiaUrl 
    } else if (randomMovie === "Dances with Wolves") {
        url = wolvesUrl
    } else if (randomMovie === "Con Air") {
        url = conUrl
    } else if (randomMovie === "Blood Diamond") {
        url = diamondUrl
    }

// Extracts the json data into a format that is user-friendly.

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
            localStorage.setItem(movieActors, data.Actors);
            localStorage.setItem(moviePlot, data.Plot);
            localStorage.setItem(movieLanguage, data.Language);
            localStorage.setItem(movieCountry, data.Country);
            localStorage.setItem(movieAwards, data.Awards);


        });


}


// Submit button event listener
submitButtonEl.addEventListener('click', sumbitSearchHandler);



/*OMDB js ends*/
