/*OMDB js*/

fetch('http://www.omdbapi.com/?apikey=5385144e&s')
.then(function(success){success.json()})
.then(function(movies){console.log(movies)})
.catch(function(error){console.log(error)})








