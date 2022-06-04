/*OMDB js*/

// Gets the data from the OMDB API and sets the content that will be displayed in the #result div
 
$("#submit").click(function(){
    var queryUrl = "http://www.omdbapi.com/?apikey=5385144e&t" + title + "&y=" + year + "&plot=short&r=json"
    fetch(queryUrl)
    .then(function(response){
        return response.json();
    })
})







