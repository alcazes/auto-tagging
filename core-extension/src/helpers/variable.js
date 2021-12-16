'use strict';
var getObjectProperty = require('../helpers/getObjectProperty');
var textMatch = require('../helpers/textMatch');

/**
 * Variable condition. Determines if a particular JS variable's actual value matches
 * an acceptable value.
 * @param {string} variableName The name of the JS variable (e.g., event.target.id).
 * @param {string} variableValue An acceptable JS variable value.
 * @param {boolean} [valueIsRegex=false] Whether <code>settings.value</code> is intended to
 * be a regular expression.
 * @returns {boolean}
 */
module.exports = function (variableName, variableValue, valueIsRegex) {
    var acceptableValue = valueIsRegex ? new RegExp(variableValue, 'i') : variableValue;
    return textMatch(getObjectProperty(window, variableName), acceptableValue);
};