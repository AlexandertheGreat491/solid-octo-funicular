
//movie poster slideshow
var moviePostersEl = document.getElementById("movie-posters");
var movieIndex = 0;
var moviePosters = ["https://www.thewrap.com/wp-content/uploads/2022/01/The-Batman-Poster-Bat-and-Cat.jpg", //batman 
"https://m.media-amazon.com/images/I/81H7xFCTwrL._AC_SL1500_.jpg", //joker
"https://m.media-amazon.com/images/I/618stJ-jeAL._AC_SY679_.jpg",  //ready player one
"https://m.media-amazon.com/images/I/911oYnatToL._AC_SY679_.jpg", // fury
"https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg", // frozen
"https://cdn.shopify.com/s/files/1/1057/4964/products/The-Big-Lebowski-Vintage-Movie-Poster-Original-German-A1-23x33-6297_800x.progressive.jpg?v=1642107625", // the big lebowski
"https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", // braveheart
"https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg", // the book of eli
"https://m.media-amazon.com/images/M/MV5BOTU4MTQ4MDUtN2Q5OS00OWFiLWFmNDYtODJlY2MxM2ZmMjk0XkEyXkFqcGdeQXVyMTc3MTc5Nw@@._V1_FMjpg_UX1000_.jpg", // california typewriter
"https://www.goldenglobes.com/sites/default/files/articles/cover_images/1991-dances-with-wolves.jpg?format=pjpg&auto=webp&optimize=high&width=850", // dances with wolves
"https://m.media-amazon.com/images/I/61y8OhHDGsL._AC_SL1000_.jpg", // con air
"https://m.media-amazon.com/images/I/51jOU6oCysL._AC_.jpg", // blood diamond
]
    // this function taken from stackoverflow thread https://stackoverflow.com/questions/14725230/using-setinterval-for-image-slideshow
var moviePosterSlideshow = function() {
         moviePostersEl.src = moviePosters[movieIndex];
         movieIndex++;
         if (movieIndex >= moviePosters.length) {
             movieIndex = 0;
         }
}

setInterval(moviePosterSlideshow, 5000);


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
var randomMovieArray = ['Batman', 'Joker', 'Star Wars', 'Ready Player One', 'Fury', 'Frozen', 'The Big Lebowski', 
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
    } else if (randomMovie === "Batman") {
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
