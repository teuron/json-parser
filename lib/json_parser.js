"use strict";
/**
 * Created by Lukas Abfalterer on 11/17/15.
 */


/**
 *
 * @param json is the json to be validated
 * @param options is an array ob keys the json has to has
 * @return {boolean} true if json is valid else {boolean} false
 */
var json_parser = function (json, options) {
    //if options is null return true
    if (options === undefined || options === null || options.length == 0) {
        return true;
    }
    if (typeof json === 'string') {
        try {
            json = JSON.parse(json);
        } catch (e) {
            return false;
        }
    }
    if (json === undefined || json === null || typeof json !== 'object') {
        return false;
    }
    var nested = [];
    for (var i = 0; i < options.length; i++) {
        if (json.hasOwnProperty(options[i])) {
            options.remove(i);
            i = 0;
        }
        if (typeof json[options[i]] === 'object') {
            nested.push(options[i]);
            options.remove(i);
        }
    }
    if (options.length == 1) {
        if (json.hasOwnProperty(options[0])) {
            options = null;
        }
    }
    return json_parser(json[nested[0]], options);
};

Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

module.exports = json_parser;