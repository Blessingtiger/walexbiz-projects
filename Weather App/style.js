document.getElementById('button-addon2').addEventListener('click', function () {
  getWeather() && applyWeatherStyles();
});

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'd30727b3d1eff6e2bded0cd48260e8bc';

  // Fetch geolocation data
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch geolocation data');
      }
      return response.json();
    })
    .then(geolocationData => {
      // Extract latitude and longitude from geolocation data
      const { lat, lon } = geolocationData[0];
      
      // Fetch weather data based on latitude and longitude
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      return response.json();
    })
    .then(weatherData => {
      displayWeather(weatherData);
      applyWeatherStyles(weatherData.weather[0].description);
    })
    .catch(error => {
      displayError(error.message);
    });
}

function applyWeatherStyles(weatherDescription) {
  const body = document.body;

  // Reset background image
  body.style.backgroundImage = 'url("image.jpg")'; // Set default image

  console.log(weatherDescription);
 
  // styles based on weather description
  switch (weatherDescription.toLowerCase()) {
    case 'clear sky':
      body.style.backgroundImage = 'url("clear-sky.jpg")';
      break;
    case 'thunderstorm':
      body.style.backgroundImage = 'url("thunderstorm.jpg")';
      break;
    case 'mist':
      body.style.backgroundImage = 'url("mist.jpg")';
      break;
    case 'scattered clouds':
      body.style.backgroundImage = 'url("scattered-clouds.jpg")';
      break;
    case 'rainy':
      body.style.backgroundImage = 'url("Rainy.jpg")';
      break;
    case 'overcast clouds':
      body.style.backgroundImage = 'url("overcast-clouds.jpg")';
      break;
    case 'broken clouds':
      body.style.backgroundImage = 'url("broken-clouds.jpg")';
      break;
    case 'light rain':
      body.style.backgroundImage = 'url("light-rain.jpg")';
      break;
    case 'shower rain':
      body.style.backgroundImage = 'url("shower-rain.webp")';
      break;
    case 'snowfall':
      body.style.backgroundImage = 'url("snowfall.jpg")';     
      break;
    case 'few clouds':
      body.style.backgroundImage = 'url("few-cloud.jpg")';
      break;
    default:
      body.style.backgroundImage = 'url("image.jpg")'; // Set default image
      break;
  }
}


function displayWeather(data) {
  const cityName = data.name;
  const countryCode = data.sys.country;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;

  const weatherInfo = `
    <h2>${cityName}, ${countryCode}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Weather: ${weatherDescription}</p>
    <p>Humidity: ${humidity}%</p>
  `;

  document.getElementById('weatherInfo').innerHTML = weatherInfo;
}

function displayError(errorMessage) {
  const errorInfo = `<p class="text-danger">${errorMessage}</p>`;
  document.getElementById('weatherInfo').innerHTML = errorInfo;
}

