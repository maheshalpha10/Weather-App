const apikey ="37300ae42ae4a268c9efe94565d17f3a";
const weatherdataE1=document.getElementById("weather data")
const cityInputE1= document.getElementById("city-input")
const formE1 = document.querySelector("form")
formE1.addEventListener("submit",(event) =>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getWeatherData(cityValue);

});
async function getWeatherData(cityValue){
    try {
      const response =await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`) ; 
      if(!response.ok){
        throw new Error("network responce is not ok")
    } 
    const data = await response.json();
    const temperature = Math.round(data.main.temp)
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    const detail =[
        `feels like:${ Math.round(data.main.feels_like)}`,
        `humidity:${data.main.humidity} %`,
        `Wind speed:${data.wind.speed} m/s`,
    ]
    weatherdataE1.querySelector(".icon").innerHTML =`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
 weatherdataE1.querySelector(".temperature").textContent = `${temperature}°C `;
 weatherdataE1.querySelector(".description").textContent = description;
 weatherdataE1.querySelector(".details").innerHTML = detail.map((detail) => `<div>${detail}</div>`).join("");
 }catch (error) {
    weatherdataE1.querySelector(".icon").innerHTML ="";
    weatherdataE1.querySelector(".temperature").textContent ="";
    weatherdataE1.querySelector(".description").textContent = "please enter correct country name, try again latar";
    weatherdataE1.querySelector(".details").innerHTML ="";
    }

}