var http = require('http');
var config = require('./config.json');

function check_api() {
    http.get('http://' + config.API_HOST + ':2017/', function(res) {
        if (res.statusCode == 200) {
            return true;
        } else {
            return false;
        }
    })
}

module.exports.check_api = check_api;
