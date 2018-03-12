const request = require('request');


function getLatLng(addressToBeLooked, callback) {
  request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToBeLooked}`,
      json: true
    },
    (error, response, body) => {
      console.log("Requested URL-> " + `https://maps.googleapis.com/maps/api/geocode/json?address=${addressToBeLooked}`);
      if (error || response.statusCode != 200) {
        callback(error);
      } else {
        if (response.body.results[0]) {
          callback(null, body.results[0].geometry.location);

        } else {
          console.log("Some problem fetching lat lng data from Google.");
        }

      }

    });
}


module.exports = {
  getLatLng
};
