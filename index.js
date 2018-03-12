const yargs = require('yargs');
const locationHelper = require('./locationHelper.js');
const weatherHelper = require('./weatherHelper.js')

var addressToBeLooked = encodeURIComponent(yargs.argv.place);

locationHelper.getLatLng(addressToBeLooked, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    weatherHelper.getWeather(result, (errorMsg, resultMsg) => {
      if (errorMsg) {
        console.log(errorMsg);
      } else {
        console.log("Current temprature at '" + decodeURIComponent(addressToBeLooked) + "' is " + resultMsg + " F ");
      }
    });
  }
});
