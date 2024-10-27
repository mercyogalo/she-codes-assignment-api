function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}


function displayTemperature(response) {
  let monthElement=document.querySelector("#season-month");
  console.log(monthElement);
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
  const currentDate=new Date();
  const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  

  const currentMonth=months[currentDate.getMonth()]

  let season;

  if (["March", "April", "May"].includes(currentMonth)) {
    season = "Spring";
  } else if (["June", "July", "August"].includes(currentMonth)) {
    season = "Summer";
  } else if (["September", "October", "November"].includes(currentMonth)) {
    season = "Fall";
  } else {
    season = "Winter";
  }

  document.querySelector("#season-month").innerHTML = `${currentMonth} `;



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
    const minutes=`0${date.getMinutes()}`
  }else{
    const minutes=`${date.getMinutes()}`
  }
  
  if (hours<10){
    const hours=`0${date.getHours()}`
  }else{
    const hours=`${date.getHours()}`
  }
  timeElement.innerHTML= ` ${days[date.getDay()]} ${hours}:${minutes}`;

 
  const iconElement=document.querySelector("#icon")
 iconElement.innerHTML= `<img src="${response.data.condition.icon_url}"class="current-temperature-icon">`


 displayCrops(season);
  }
  
  
 
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  
  
    
 

  