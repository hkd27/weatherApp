const request = require('request');
const accountKey = 'c1c79c93374cb0e0b5e2439d84fd12f5';


var lat, lng;

console.log("starting weatherHelper");

function getWeather(input, callback) {
  lat = input.lat;
  lng = input.lng;
  request({
    url: `https://api.darksky.net/forecast/${accountKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    console.log("Weather request URL -> ", `https://api.darksky.net/forecast/${accountKey}/${lat},${lng}`);
    if (error || response.statusCode != 200) {
      callback("unable to fetch location");
    } else {
      callback(undefined, body.currently.temperature);
    }
  })
}
module.exports = {
  getWeather
};
