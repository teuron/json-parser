"use strict";
/**
 * Created by Lukas Abfalterer on 11/8/15.
 */
var expect = require("chai").expect;
var parser = require('./../lib/json_parser.js');

var testingJSON = JSON.parse('{"phone_number": 123456788, "registration_date": "2015-11-17T15:26:06.174Z", "name": {"first": "Walter","last": "White"}}');

describe("Json Validation", function () {

    it("returns true if json has right properties in first level", function () {
        var valid = parser(testingJSON, ["phone_number", "registration_date", "name"]);
        expect(valid).to.equal(true);
    });

   it("returns true if json has all right properties", function () {
        var valid = parser(testingJSON, ["phone_number", "name", "first", "last"]);
        expect(valid).to.equal(true);
    });

    it("returns true if options is null", function () {
        var valid = parser(testingJSON, null);
        expect(valid).to.equal(true);
    });
    it("returns true if options is undefined", function () {
        var valid = parser(testingJSON, undefined);
        expect(valid).to.equal(true);
    });
    it("returns true if options length = 0", function () {
        var valid = parser(testingJSON, []);
        expect(valid).to.equal(true);
    });
    it("returns false if json is not a valid json", function () {
        var valid = parser("phone_number", ["phone_number"]);
        expect(valid).to.equal(false);
    });
    it("returns false if json is undefined", function () {
        var valid = parser(undefined, ["phone_number"]);
        expect(valid).to.equal(false);
    });
    it("returns false if json is null", function () {
        var valid = parser(null, ["phone_number"]);
        expect(valid).to.equal(false);
    });
    it("returns false if json has not all arguments", function () {
        var valid = parser('{"phone_number": 12345}', ["phone_number", "name"]);
        expect(valid).to.equal(false);
    });
    it("returns false if json has not all arguments nested", function () {
        var valid = parser('{"phone_number": 12345, "name":{"first": "asdf"}', ["phone_number", "name", "first", "last"]);
        expect(valid).to.equal(false);
    });

});