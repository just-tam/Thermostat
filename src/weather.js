function weather() {
    //Get movie and tv show title from TMDB
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=419eaf211864a1e6cdbb79ced04391fc&units=metric")
        .then(function(response) {
            response.text().then(function(text) {
                var data = JSON.parse(text);
                document.getElementById("weather").innerHTML = data.weather[0].main;
                document.getElementById("outside-temp").innerHTML = data.main.temp + " degrees";
            })
        })
}

window.onload = function() {
    weather();
}