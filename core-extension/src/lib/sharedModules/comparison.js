'use strict';

var valueComparison = require("../../helpers/valueComparison");

module.exports = {
    valueComparison: valueComparison,
    operators: {
        equals: "equals",
        doesNotEqual: "doesNotEqual",
        contains: "contains",
        doesNotContain: "doesNotContain",
        startsWith: "startsWith",
        doesNotStartWith: "doesNotStartWith",
        endsWith: "endsWith",
        doesNotEndWith: "doesNotEndWith",
        matchesRegex: "matchesRegex",
        doesNotMatchRegex: "doesNotMatchRegex",
        lessThan: "lessThan",
        lessThanOrEqual: "lessThanOrEqual",
        greaterThan: "greaterThan",
        greaterThanOrEqual: "greaterThanOrEqual",
        isTrue: "isTrue",
        isTruthy: "isTruthy",
        isFalse: "isFalse",
        isFalsy: "isFalsy"
    }
};