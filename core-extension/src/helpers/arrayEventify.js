'use strict';

/**
 * Update the push function of an array to execute a callback each time an item is pushed.
 * @param {Array} targetArray - Array targeted
 * @param {Function} callback - Callback function to be called when push happens
 */
module.exports = function (targetArray, callback) {
    targetArray.push = function (e) {
        Array.prototype.push.call(targetArray, e);
        try {
            callback(targetArray);
        } catch (e) {
            turbine.logger.error('Failed to run callback in arrayEventify', e);
        }
    }
};
