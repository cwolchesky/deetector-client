var request = require('request');
var config = require('./config.json');


var ENV = process.argv.forEach(function (val, index, array) {
    if (val.substring(0,4) == 'ENV=') {
        var mode = val.substring(4, val.length+1);
        console.log("Setting Environment to %s", mode);
    }
});


function check_api() {
    var success = false;
    request('http://' + config.API_HOST + ":" + config.API_PORT, function(error, response, body) {
        if (ENV == "DEV") {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
        }
        if (response.statusCode == 200) {
        success = true;
        }
    });
    return success;
};

if (check_api() == true) {
    console.log("Found API at http://" + config.API_HOST + ":" + config.API_PORT);
} else {
    throw new Error("Did not find API at http://" + config.API_HOST + ":" + config.API_PORT +"!");
}

module.exports.check_api = check_api;
