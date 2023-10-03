// var city = localStorage.getItem("city")

var weather = {
    apiKey:"f8e7222d3f62239de2cbfc102913bc69",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey)
        .then(response => response.json())
        .then(data =>{   
            console.log(data);
   
        var {name} = data;
        var {icon, description} = data.weather [0];
        var {temp, humidity} = data.main;
        var {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".tempretaure").innerText = temp.toFixed(0) + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + " mph";
        // localStorage.setItem("city", city);
        }
        )},

    search: function(){
        this.fetchWeather(document.querySelector("#cityInput").value);
    }
};

var myButton = document.getElementById("searchBtn");
myButton.addEventListener("click",function(){  
    weather.search();
    weathers.search();
});

var weathers = {
       apiKey:"5e149257cda96dbb1e8ed6d2df99ad7e",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast/?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey)
        .then(response => response.json())
        .then(data =>{   
            console.log(data);

            document.querySelector(".imgClass1").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon+ '.png';
            document.getElementById("day1Min" ).innerHTML = 'Temp: ' + Number(data.list[0].main.temp).toFixed(0) + "°F";
            document.getElementById("day1Max" ).innerHTML = 'Humidity: ' + Number(data.list[0].main.humidity) + "%";

            document.querySelector(".imgClass2").src = "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon+ '.png';
            document.getElementById("day2Min" ).innerHTML = 'Temp: ' + Number(data.list[8].main.temp).toFixed(0) + "°F";
            document.getElementById("day2Max" ).innerHTML = 'Humidity: ' + Number(data.list[8].main.humidity) + "%";

            document.querySelector(".imgClass3").src = "https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon+ '.png';
            document.getElementById("day3Min" ).innerHTML = 'Temp: ' + Number(data.list[16].main.temp).toFixed(0) + "°F";
            document.getElementById("day3Max" ).innerHTML = 'Humidity: ' + Number(data.list[16].main.humidity) + "%";

            document.querySelector(".imgClass4").src = "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon+ '.png';
            document.getElementById("day4Min" ).innerHTML = 'Temp: ' + Number(data.list[24].main.temp).toFixed(0) + "°F";
            document.getElementById("day4Max" ).innerHTML = 'Humidity: ' + Number(data.list[24].main.humidity) + "%";

            document.querySelector(".imgClass5").src = "https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon+ '.png';
            document.getElementById("day5Min" ).innerHTML = 'Temp: ' + Number(data.list[32].main.temp).toFixed(0) + "°F";
            document.getElementById("day5Max" ).innerHTML = 'Humidity: ' + Number(data.list[32].main.humidity) + "%";

})      
        },

        search: function(){
            this.fetchWeather(document.querySelector("#cityInput").value);
        }
    }


