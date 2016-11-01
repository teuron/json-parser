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

    json = flatten(json);
    return inner(json, options);
};

//Testing it recursively
let inner = (json, options) => {
    if (options === undefined || options === null || options.length == 0) {
        return true;
    }
    //Wildcardsearch
    if (options[0].endsWith("*")) {
        let found = false;
        Object.keys(json).map((key)=> {
            if (key.startsWith(options[0].substring(0, options[0].length - 1)))
                found = true;
        });
        if (found) return inner(json, options.slice(1));
    } else if (json.hasOwnProperty(options[0])) {
        return inner(json, options.slice(1));
    }
    return false;
};

/*
 * Copyright http://stackoverflow.com/users/1048572/bergi
 * In this answer on stackoverflow
 * http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects
 */
let flatten = function (data) {
    let result = {};

    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (var i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop ? prop + "." + i : "" + i);
            if (l == 0)
                result[prop] = [];
        } else {
            let isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty)
                result[prop] = {};
            }
    }

    recurse(data, "");
    return result;
};

if (typeof(window) === 'undefined')
    module.exports = json_parser;