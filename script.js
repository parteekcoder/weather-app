/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

const cityName=document.getElementById("city-name");
// console.log(cityName)/
const weatherType=document.getElementById('weather-type');
const temp=document.getElementById('temp');
const minTemp=document.getElementById('min-temp');
const maxTemp=document.getElementById('max-temp');
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7b825993femsh494c8ae5f2e902bp1fcf17jsn937b278f46ac',
// 		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
// 	}
// };


// // API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// /**
//  * Retrieve weather data from openweathermap
//  * HINT: Use fetch()
//  * HINT: URL should look like this: 
//  * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
//  */
// getWeatherData = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   //HINT: Use template literals to create a url with input and an API key
//   return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2Cuk&units=imperial`, options)
//   .then(response => response.json())
//   .then(response =>  response)
//   .catch(err => console.log(err));
  
  
// }
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}
// getWeatherData("London");
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const weatherData= await getWeatherData(city);
  showWeatherData(weatherData)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  // console.log(weatherData)
  cityName.innerText=weatherData.name
  weatherType.innerText=weatherData.weather[0].main;
  temp.innerText=weatherData.main.temp;
  minTemp.innerText=weatherData.main.temp_min;
  maxTemp.innerText=weatherData.main.temp_max;
  // console.log(weatherData.name,cityName)

  
}

