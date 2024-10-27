function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}


function displayTemperature(response) {
  let cropHeading=document.querySelector("#crops-section-heading");
  cropHeading.style.display = "block";
  let monthElement=document.querySelector("#season-month");
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
  
  
  const cropsBySeason = {
    Spring: {
      crops: ["Lettuce", "Spinach", "Radish", "Peas", "Carrots"],
      reasons: "These crops thrive in mild temperatures and grow well before the summer heat."
    },
    Summer: {
      crops: ["Tomatoes", "Peppers", "Cucumbers", "Beans", "Corn"],
      reasons: "These crops require full sun and warmer soil temperatures to grow properly."
    },
    Fall: {
      crops: ["Broccoli", "Cauliflower", "Kale", "Turnips", "Brussels Sprouts"],
      reasons: "These vegetables are cold-tolerant and can withstand the cooler temperatures of fall."
    },
    Winter: {
      crops: ["Garlic", "Onions", "Kale", "Spinach", "Cabbage"],
      reasons: "These crops are hardy and can survive frost, making them ideal for winter planting."
    }
  };
  
  // Display crops and reasons in HTML
  function displayCrops(season) {
    const cropContainer = document.querySelector("#crops-container");
    const reasonContainer = document.querySelector("#reasons-container");
   
    
    // Get crops and reasons based on season
    const { crops, reasons } = cropsBySeason[season];
  
    // Create a list of crops
    cropContainer.innerHTML = `<h3 id="crops-heading">Suitable Crops</h3>
    <ul>${crops.map(crop => `<li>${crop}</li>`).join("")}</ul>`;
  
    // Display reasons for these crops
    reasonContainer.innerHTML = ` <h3 id="crops-heading">Why These Crops?</h3>
    <p>${reasons}</p>`;
  }
  
 
    
 

  