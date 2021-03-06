'use strict';

var isNumber = function (value) {
    return typeof value === 'number' && isFinite(value); // isFinite weeds out NaNs.
};

var isString = function (value) {
    return typeof value === 'string' || value instanceof String;
};

var updateCase = function (operand, caseInsensitive) {
    return caseInsensitive && isString(operand) ? operand.toLowerCase() : operand;
};

var castToStringIfNumber = function (operand) {
    return isNumber(operand) ? String(operand) : operand;
};

var castToNumberIfString = function (operand) {
    return isString(operand) ? Number(operand) : operand;
};

var guardStringCompare = function (compare) {
    return function (leftOperand, rightOperand, caseInsensitive) {
        leftOperand = castToStringIfNumber(leftOperand);
        rightOperand = castToStringIfNumber(rightOperand);

        return (
            isString(leftOperand) &&
            isString(rightOperand) &&
            compare(leftOperand, rightOperand, caseInsensitive)
        );
    };
};

var guardNumberCompare = function (compare) {
    return function (leftOperand, rightOperand) {
        leftOperand = castToNumberIfString(leftOperand);
        rightOperand = castToNumberIfString(rightOperand);

        return (
            isNumber(leftOperand) &&
            isNumber(rightOperand) &&
            compare(leftOperand, rightOperand)
        );
    };
};

var guardCaseSensitivity = function (compare) {
    return function (leftOperand, rightOperand, caseInsensitive) {
        return compare(
            updateCase(leftOperand, caseInsensitive),
            updateCase(rightOperand, caseInsensitive)
        );
    };
};

var conditions = {
    equals: guardCaseSensitivity(function (leftOperand, rightOperand) {
        return leftOperand == rightOperand;
    }),
    doesNotEqual: function () {
        return !conditions.equals.apply(null, arguments);
    },
    contains: guardStringCompare(guardCaseSensitivity(function (leftOperand, rightOperand) {
        return leftOperand.indexOf(rightOperand) !== -1;
    })),
    doesNotContain: function () {
        return !conditions.contains.apply(null, arguments);
    },
    startsWith: guardStringCompare(guardCaseSensitivity(function (leftOperand, rightOperand) {
        return leftOperand.indexOf(rightOperand) === 0;
    })),
    doesNotStartWith: function () {
        return !conditions.startsWith.apply(null, arguments);
    },
    endsWith: guardStringCompare(guardCaseSensitivity(function (leftOperand, rightOperand) {
        return leftOperand.substring(
            leftOperand.length - rightOperand.length,
            leftOperand.length
        ) === rightOperand;
    })),
    doesNotEndWith: function () {
        return !conditions.endsWith.apply(null, arguments);
    },
    matchesRegex: guardStringCompare(function (leftOperand, rightOperand, caseInsensitive) {
        // Doing something like new RegExp(/ab+c/, 'i') throws an error in some browsers (e.g., IE11),
        // so we don't want to instantiate the regex until we know we're working with a string.
        return new RegExp(rightOperand, caseInsensitive ? 'i' : '').test(leftOperand);
    }),
    doesNotMatchRegex: function () {
        return !conditions.matchesRegex.apply(null, arguments);
    },
    lessThan: guardNumberCompare(function (leftOperand, rightOperand) {
        return leftOperand < rightOperand;
    }),
    lessThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
        return leftOperand <= rightOperand;
    }),
    greaterThan: guardNumberCompare(function (leftOperand, rightOperand) {
        return leftOperand > rightOperand;
    }),
    greaterThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
        return leftOperand >= rightOperand;
    }),
    isTrue: function (leftOperand) {
        return leftOperand === true;
    },
    isTruthy: function (leftOperand) {
        return Boolean(leftOperand);
    },
    isFalse: function (leftOperand) {
        return leftOperand === false;
    },
    isFalsy: function (leftOperand) {
        return !leftOperand;
    },
};

module.exports = function (operator, leftOperand, rightOperand, caseInsensitive) {
    return conditions[operator](
        leftOperand,
        rightOperand,
        Boolean(caseInsensitive)
    );
};