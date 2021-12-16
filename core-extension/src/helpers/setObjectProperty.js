'use strict';

/**
 * Set the deep property value of an object. If the property and parents property do not exist,
 * will create them.
 * @param property The property name to be set. It can contain dots. (eg. prop.subprop1)
 * @param value Value to set the property to
 * @param rootObject The root to which we will add the property
 */
module.exports = function (property, value, rootObject) {
    var propertyChain = property ? property.split('.') : [];
    var currentValue = typeof rootObject == 'object' ? rootObject : window;

    for (var i = 0, len = propertyChain.length; i < len; i++) {
        if (typeof currentValue !== 'undefined' && currentValue !== null && !currentValue[propertyChain[i]]) {
            currentValue[propertyChain[i]] = i !== len - 1 ? {} : value;
        } else if (i == len - 1) {
            currentValue[propertyChain[i]] = value;
        }

        currentValue = currentValue[propertyChain[i]];
    }
};