"use strict";
/**
 * Created by Lukas Abfalterer on 11/17/15.
 */

/**
 * Important note: the options must be in the same order as the json
 * Example:
 *  JSON: {
 *         "phone_number": 1234,
 *         "name": {
 *            "first": "foo",
 *            "last": "bar"
 *         }
 *       }
 *  Options: ["phone_number", "name", "first","last"]
 *
 * @param json is the json to be validated
 * @param options is an array ob keys the json has to has
 * @return {boolean} true if json is valid else {boolean} false
 */
let json_parser = function (json, options) {
    //if options is null return true
    if (options === undefined || options === null || options.length == 0) {
        return true;
    }
    //If json is a string try to parse it
    if (typeof json === 'string') {
        try {
            json = JSON.parse(json);
        } catch (e) {
            return false;
        }
    }
    //if json is something strange its false
    if (json === undefined || json === null || typeof json !== 'object') {
        return false;
    }
    return inner(json, options);
};

//Testing it recursively
let inner = (json, options) =>{
    //if it is an object go into that
    if (typeof json[options[0]] === 'object') {
        return json_parser(json[options[0]], options.slice(1));
    }
    if (json.hasOwnProperty(options[0])) {
        return json_parser(json, options.slice(1));
    }
    return false;
};

if(typeof(window) === 'undefined')
    module.exports = json_parser;