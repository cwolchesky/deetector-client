var expect = require('chai').expect;

// Test suite
describe('Mocha', function () {
    // Test spec (unit test)
    it('should run our tests using npm', function() {
        expect(true).to.be.ok;
    });
});

describe('client', function() {
    before(function() {

    });

    describe('Initial Checks', function() {
        var config = require('../config.json');
        var check_api = require('../app').check_api;

        it('verified the presence of the remote API', function() {
            expect(check_api()).to.be.true;
        });
    });

    describe('BLUETOOTH', function() {
        it('can find nearby devices with --scan');
        it('can pair with a device using --pair');
        it('checks for the presence of a previously paired device');
    });

    describe('API', function() {
        it('can update the API service on a state change');
    });

});
