/*OMDB js*/


document.getElementById("getForm").addEventListener("submit", function(event){
    event.preventDefault();
    loadMovies(document.querySelector("input[name='query'").value);
});

function loadMovies(name) {
    var omdbAPI = newXMLHttpRequest();
    var omdbURL = ("http://www.omdbapi.com/?apikey=5385144e&t" + title + "&y=" + year + "&plot=short&r=json");
    omdbAPI.open("get", omdbURL, true);
    omdbAPI.onload = function(event) {
        event.preventDefault();
        if(this.status == 200) {
            var result = JSON.parse(this.responseText);
            console.log(result);
            var output = "";
            for (var i in result) {
                output +=
                '<div class="user">' +
                '<h3>Title: ' + result.Title + '</h3>' +
                '</div>'; 
            }
            document.getElementById('result').innerHTML = output;
        } else {
            alert("No results");
        }
    }
    omdbAPI.send();
}







