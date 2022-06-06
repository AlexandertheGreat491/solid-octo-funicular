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