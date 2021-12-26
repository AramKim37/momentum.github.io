const API_KEY = "942db9b3d13f87eb30bb0fd0be77cc11";
function geoSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=50.8961015&lon=-114.0765927&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weather");
      const country = data.sys.country;
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;

      weatherInfo.innerText = `${country} ${name} ${weather} ${temp}`;
    });
}
function geoError() {
  alert("There are something wrong!!");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
