'use strict'

searchButton.addEventListener('click', searchforWeather);

function searchforWeather(){
  var cityName = console.log(searchCity.value);  
  
  if (cityName.trim().length == 0){
      return alert ("Please enter a city name")
      };

  var http = new XMLHttpRequest();
  var url = 'http://api.openweathermap.org/data/2.5/weather?q={city name}';
  var apiKey = '9e028f84635d8163c34be0972fcaec69';
  var method = 'GET';
  
  http.open(method, url)
  http.onreadystatechange = function(){
      if(http.onreadystatechange === XMLHttpRequest.DONE && http.status === 200){
          
          
      } else if(http.readyState === XMLHttpRequest.DONE) {
          alert("Something went wrong!");
          
          
      };
      
  };
  
    
};

