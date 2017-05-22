import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=74cb8d68f91ce07d351b6317ab2ddce7';

module.exports = {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location);
    let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestURL).then((response) => {
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, (response) => {
      throw new Error(response.data.message);
    });
  }
}
