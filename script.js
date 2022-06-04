/*OMDB js*/

var requestUrl = "https://www.omdbapi.com/?apikey=5385144e&t=Batman&plot=full";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });











