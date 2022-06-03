/*OMDB js*/

 // "5385144e";


// Gets the data from the OMDB API and sets the content that will be displayed in the #result div
$("#submit").click(function(){

fetch("http://www.omdbapi.com/?apikey=5385144e&s")
.then(function(success){
    success.json()
})
.then(function(movies){
    console.log(movies)
})
.catch(function (error){ console.log(error)});
});
