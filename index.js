function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}



function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;
    const conditionElement=document.querySelector("#weather-condition");
  conditionElement.innerHTML=response.data.condition.description;
  const humidityElement=document.querySelector("#weather-humidity");
  humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  const windElement=document.querySelector("#weather-wind");
  windElement.innerHTML=`${response.data.wind.speed}km/h`;
  const timeElement=document.querySelector("#weather-time");
  date=new Date(response.data.time*1000);
  const days=[
    "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"]

  const hours=date.getHours();
  const minutes=date.getMinutes();

   if (minutes<10){
    `0${date.getMinutes()}`
  }
  
  if (hours<10){
   hours= `0${date.getHours()}`
  }
  timeElement.innerHTML= ` ${days[date.getDay()]} ${hours}:${minutes}`;

 
  const iconElement=document.querySelector("#icon")
 iconElement.innerHTML= `<img src="${response.data.condition.icon_url}"class="current-temperature-icon">`
  }
  
  
 
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  
  
  
  
 

  