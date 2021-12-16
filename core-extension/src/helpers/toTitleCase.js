'use strict';

/**
 * Transform each first letter in each word to capital case.
 * @param {string} str The string to be titleCase
 * @returns {string} transformed string
 */
module.exports = function (str) {
    return str.replace(/\w\S*/g, function(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
};