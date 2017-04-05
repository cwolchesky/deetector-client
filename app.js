var request = require('request');
var config = require('./config.json');

function check_api() {
    var success = false;
    request('http://' + config.API_HOST + ":" + config.API_PORT, function(error, response, body) {
        if (response.statusCode == 200) {
        success = true;
        }
    });
    return success;
};

if (check_api() == true) {
    console.log("Found API at http://" + config.API_HOST + ":" + config.API_PORT);
} else {
    throw new Error("Did not find API!");
}

module.exports.check_api = check_api;
