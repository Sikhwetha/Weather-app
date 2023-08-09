const apikey = "bfc49ef72848d2316f10051a8bdd0b1d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    
    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Update the weather information
        document.querySelector(".cityname").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Update the weather icon based on the weather condition
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/1419110_clouds_sun_weather_icon.png";
        } else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/118959_clear_weather_icon.png";
        } else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/2998141_cloud_nature_rain_weather_icon.png";
        } else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/4102327_cloud_drizzle_rain_weather_icon.png";
        } else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/2682811_cloud_cloudy_fog_mist_moon_icon.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
});
