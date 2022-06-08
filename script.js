
// google programmable search engine api
var searchInput 
var websitesEl = document.getElementById("websites");
var googleFormEl = document.getElementById("google-form");
var googleSearch = document.getElementById("google-search");

    // get from input data
var googleFormHandler = function(event) {
    event.preventDefault();
    searchInput = googleSearch.value.trim();
    if (searchInput) {
        getGoogleData();
        googleSearch.value = "";
    }
}

    // api fetch request 
var getGoogleData = function() {
    var apiUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAiib3CHEMRsVk3qS6ybJl6ffY8yOGf9ww&cx=26e4f40d5ac7281e0&q=" + searchInput;
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
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

var batmanrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";
var jokerrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Joker&plot=full"
var starwarsrequestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Star+Wars&plot=full"
var thepreciousUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Lord+of+the+Rings&plot=full"
var submitButtonEl = document.querySelector('#submit');
var resetButtonEl = document.querySelector('#reset');
var randomMovieArray = ['Batman', 'Joker', 'Star Wars','Lord of the Rings'];
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
    } else if (randomMovie === "Lord of the Rings") {
        url = thepreciousUrl }
     else if (randomMovie === "Batman") {
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
