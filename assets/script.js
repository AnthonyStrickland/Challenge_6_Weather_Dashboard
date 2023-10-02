var weather= {
    apiKey:"f8e7222d3f62239de2cbfc102913bc69",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey)
        .then(response => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
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
    },

    search: function(){
        this.fetchWeather(document.querySelector("#cityInput").value);
    },

        var weather = {
            apiKey:"5e149257cda96dbb1e8ed6d2df99ad7e",
            fetchWeather: function (city) {
                fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
                + city 
                + "&units=imperial&appid=" 
                + this.apiKey)
                .then(response => response.json())
                .then(data =>{   
                    console.log(data);
    
                        for(i=0;i<5;i++){
                document.getElementById("day" + (i+1) +"Min").innerHTML = "Min;" + Number(data.list[i].main.temp_min).toFixed(0)+"°F";
            }
            for(i=0;i<5;i++){
                 document.getElementById("day" + (i+1) +"Max").innerHTML = "Max;" + Number(data.list[i].main.temp_max).toFixed(0)+"°F";     
            }   
        })      
                },
    
            search: function(){
                this.fetchWeather(document.querySelector(".days").value);
            }
        }

var myButton = document.getElementById("searchBtn");
myButton.addEventListener("click",function(){  
    weather.search();
});





