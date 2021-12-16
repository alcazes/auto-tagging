var expect = require('chai').expect;
var valueComparison = require('../src/helpers/valueComparison');

var trueVar= true;
var falsevar= false;
var undefinedVar;
var nullVar;

var operators = {
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

describe('valueComparison', function() {
    describe('equals', function (done) {
        it('expect to return true if strings are the same', function () {
            expect(valueComparison(operators.equals, 'Test123', 'Test123')).to.be.true;
            done;
        });

        it('expect to return false if strings are different', function () {
            expect(valueComparison(operators.equals, 'Test123', 'Testabc')).to.be.false;
            done;
        });

        it('expect to return false if strings are same but contains different case', function () {
            expect(valueComparison(operators.equals, 'Test123', 'test123')).to.be.false;
            done;
        });

        it('expect to return true if strings are same but contains different case using caseIncensitive to true', function () {
            expect(valueComparison(operators.equals, 'Test123', 'test123', true)).to.be.true;
            done;
        });

        it('expect to return true if numbers are the same', function () {
            expect(valueComparison(operators.equals, 123, 123)).to.be.true;
            done;
        });

        it('expect to return false if numbers are different', function () {
            expect(valueComparison(operators.equals, 123, 456)).to.be.false;
            done;
        });

        it('expect to return true if string number and number are same', function () {
            expect(valueComparison(operators.equals, '123', 123)).to.be.true;
            done;
        });

        it('expect to return false if string number and number are different', function () {
            expect(valueComparison(operators.equals, '1234', 123)).to.be.false;
            done;
        });
    });

    describe('doesNotEqual', function (done) {
        it('expect to return true if strings are different', function () {
            expect(valueComparison(operators.doesNotEqual, 'Test123', 'Testabc')).to.be.true;
            done;
        });

        it('expect to return false if strings are same', function () {
            expect(valueComparison(operators.doesNotEqual, 'Test123', 'Test123')).to.be.false;
            done;
        });

        it('expect to return true if strings are same word but different cases', function () {
            expect(valueComparison(operators.doesNotEqual, 'Test123', 'TeST123')).to.be.true;
            done;
        });

        it('expect to return false if strings are same word but different cases and caseIncensitive is true', function () {
            expect(valueComparison(operators.doesNotEqual, 'Test123', 'TeST123', true)).to.be.false;
            done;
        });

        it('expect to return true if numbers are different', function () {
            expect(valueComparison(operators.doesNotEqual, 123, 456)).to.be.true;
            done;
        });

        it('expect to return true if numbers are same', function () {
            expect(valueComparison(operators.doesNotEqual, 123, 123)).to.be.false;
            done;
        });

        it('expect to return false if string number and number are same', function () {
            expect(valueComparison(operators.doesNotEqual, '123', 123)).to.be.false;
            done;
        });

        it('expect to return true if string number and number are different', function () {
            expect(valueComparison(operators.doesNotEqual, '1234', 123)).to.be.true;
            done;
        });
    });

    describe('contains', function (done) {
        it('expect to return true if strings contains exact substring', function () {
            expect(valueComparison(operators.contains, 'Test123', 'Test')).to.be.true;
            done;
        });

        it('expect to return false if strings does not contain exact substring', function () {
            expect(valueComparison(operators.contains, 'Test123', 'test')).to.be.false;
            done;
        });

        it('expect to return true if strings contains substring case incensitive', function () {
            expect(valueComparison(operators.contains, 'Test123', 'test', true)).to.be.true;
            done;
        });

        it('expect to return true if number contains number', function () {
            expect(valueComparison(operators.contains, 123456, 56)).to.be.true;
            done;
        });

        it('expect to return false if number does not contain number', function () {
            expect(valueComparison(operators.contains, 123456, 7)).to.be.false;
            done;
        });

        it('expect to return true if string contains number', function () {
            expect(valueComparison(operators.contains, 'Test7', 7)).to.be.true;
            done;
        });

        it('expect to return false if string does not contain number', function () {
            expect(valueComparison(operators.contains, 'Test8', 7)).to.be.false;
            done;
        });

        it('expect to return true if number contains string', function () {
            expect(valueComparison(operators.contains, 7, '7')).to.be.true;
            done;
        });

        it('expect to return false if number does not contain string', function () {
            expect(valueComparison(operators.contains, 7, '8')).to.be.false;
            done;
        });
    });

    describe('doesNotContain', function (done) {
        it('expect to return false if strings contains exact substring', function () {
            expect(valueComparison(operators.doesNotContain, 'Test123', 'Test')).to.be.false;
            done;
        });

        it('expect to return true if strings does not contain exact substring', function () {
            expect(valueComparison(operators.doesNotContain, 'Test123', 'test')).to.be.true;
            done;
        });

        it('expect to return false if strings contains substring case incensitive', function () {
            expect(valueComparison(operators.doesNotContain, 'Test123', 'test', true)).to.be.false;
            done;
        });

        it('expect to return false if number contains number', function () {
            expect(valueComparison(operators.doesNotContain, 123456, 56)).to.be.false;
            done;
        });

        it('expect to return true if number does not contain number', function () {
            expect(valueComparison(operators.doesNotContain, 123456, 7)).to.be.true;
            done;
        });

        it('expect to return false if string contains number', function () {
            expect(valueComparison(operators.doesNotContain, 'Test7', 7)).to.be.false;
            done;
        });

        it('expect to return true if string does not contain number', function () {
            expect(valueComparison(operators.doesNotContain, 'Test8', 7)).to.be.true;
            done;
        });

        it('expect to return false if number contains string', function () {
            expect(valueComparison(operators.doesNotContain, 7, '7')).to.be.false;
            done;
        });

        it('expect to return true if number does not contain string', function () {
            expect(valueComparison(operators.doesNotContain, 7, '8')).to.be.true;
            done;
        });
    });

    describe('startsWith', function (done) {
        it('expect to return true if string start with exact sub-string', function () {
            expect(valueComparison(operators.startsWith, 'Test123', 'Test')).to.be.true;
            done;
        });

        it('expect to return false if string does not start with exact sub-string', function () {
            expect(valueComparison(operators.startsWith, 'Test123', 'test')).to.be.false;
            done;
        });

        it('expect to return true if string start with sub-string with case incensitivity on', function () {
            expect(valueComparison(operators.startsWith, 'Test123', 'test', true)).to.be.true;
            done;
        });

        it('expect to return true if string start with number', function () {
            expect(valueComparison(operators.startsWith, '123Test', 123)).to.be.true;
            done;
        });

        it('expect to return false if string does not start with number', function () {
            expect(valueComparison(operators.startsWith, '123Test', 456)).to.be.false;
            done;
        });

        it('expect to return true if number start with number', function () {
            expect(valueComparison(operators.startsWith, 456789, 456)).to.be.true;
            done;
        });

        it('expect to return false if number does not start with number', function () {
            expect(valueComparison(operators.startsWith, 456789, 4568)).to.be.false;
            done;
        });

        it('expect to return true if number start with string', function () {
            expect(valueComparison(operators.startsWith, 456789, '456')).to.be.true;
            done;
        });

        it('expect to return false if number does not start with string', function () {
            expect(valueComparison(operators.startsWith, 456789, '4568')).to.be.false;
            done;
        });
    });

    describe('doesNotStartWith', function (done) {
        it('expect to return false if string start with exact sub-string', function () {
            expect(valueComparison(operators.doesNotStartWith, 'Test123', 'Test')).to.be.false;
            done;
        });

        it('expect to return true if string does not start with exact sub-string', function () {
            expect(valueComparison(operators.doesNotStartWith, 'Test123', 'test')).to.be.true;
            done;
        });

        it('expect to return false if string start with sub-string with case incensitivity on', function () {
            expect(valueComparison(operators.doesNotStartWith, 'Test123', 'test', true)).to.be.false;
            done;
        });

        it('expect to return false if string start with number', function () {
            expect(valueComparison(operators.doesNotStartWith, '123Test', 123)).to.be.false;
            done;
        });

        it('expect to return true if string does not start with number', function () {
            expect(valueComparison(operators.doesNotStartWith, '123Test', 456)).to.be.true;
            done;
        });

        it('expect to return false if number start with number', function () {
            expect(valueComparison(operators.doesNotStartWith, 456789, 456)).to.be.false;
            done;
        });

        it('expect to return true if number does not start with number', function () {
            expect(valueComparison(operators.doesNotStartWith, 456789, 4568)).to.be.true;
            done;
        });

        it('expect to return false if number start with string', function () {
            expect(valueComparison(operators.doesNotStartWith, 456789, '456')).to.be.false;
            done;
        });

        it('expect to return true if number does not start with string', function () {
            expect(valueComparison(operators.doesNotStartWith, 456789, '4568')).to.be.true;
            done;
        });
    });

    describe('endsWith', function (done) {
        it('expect to return true if string ends with exact sub-string', function () {
            expect(valueComparison(operators.endsWith, 'Test123', '123')).to.be.true;
            done;
        });

        it('expect to return false if string does not end with exact sub-string', function () {
            expect(valueComparison(operators.endsWith, 'Test123', '456')).to.be.false;
            done;
        });

        it('expect to return true if string ends with sub-string with case incensitivity on', function () {
            expect(valueComparison(operators.endsWith, 'Test123A', 't123a', true)).to.be.true;
            done;
        });

        it('expect to return true if string ends with number', function () {
            expect(valueComparison(operators.endsWith, 'Test123', 123)).to.be.true;
            done;
        });

        it('expect to return false if string does not end with number', function () {
            expect(valueComparison(operators.endsWith, 'Test123', 456)).to.be.false;
            done;
        });

        it('expect to return true if number ends with number', function () {
            expect(valueComparison(operators.endsWith, 456789, 789)).to.be.true;
            done;
        });

        it('expect to return false if number does not end with number', function () {
            expect(valueComparison(operators.endsWith, 456789, 799)).to.be.false;
            done;
        });

        it('expect to return true if number ends with string', function () {
            expect(valueComparison(operators.endsWith, 456789, '789')).to.be.true;
            done;
        });

        it('expect to return false if number does not end with string', function () {
            expect(valueComparison(operators.endsWith, 456789, '799')).to.be.false;
            done;
        });
    });

    describe('doesNotEndWith', function (done) {
        it('expect to return false if string ends with exact sub-string', function () {
            expect(valueComparison(operators.doesNotEndWith, 'Test123', '123')).to.be.false;
            done;
        });

        it('expect to return true if string does not end with exact sub-string', function () {
            expect(valueComparison(operators.doesNotEndWith, 'Test123', '456')).to.be.true;
            done;
        });

        it('expect to return false if string ends with sub-string with case incensitivity on', function () {
            expect(valueComparison(operators.doesNotEndWith, 'Test123A', 't123a', true)).to.be.false;
            done;
        });

        it('expect to return false if string ends with number', function () {
            expect(valueComparison(operators.doesNotEndWith, 'Test123', 123)).to.be.false;
            done;
        });

        it('expect to return true if string does not end with number', function () {
            expect(valueComparison(operators.doesNotEndWith, 'Test123', 456)).to.be.true;
            done;
        });

        it('expect to return false if number ends with number', function () {
            expect(valueComparison(operators.doesNotEndWith, 456789, 789)).to.be.false;
            done;
        });

        it('expect to return true if number does not end with number', function () {
            expect(valueComparison(operators.doesNotEndWith, 456789, 799)).to.be.true;
            done;
        });

        it('expect to return false if number ends with string', function () {
            expect(valueComparison(operators.doesNotEndWith, 456789, '789')).to.be.false;
            done;
        });

        it('expect to return true if number does not end with string', function () {
            expect(valueComparison(operators.doesNotEndWith, 456789, '799')).to.be.true;
            done;
        });
    });

    describe('matchesRegex', function (done) {
        it('expect to return true if string matches regex', function () {
            expect(valueComparison(operators.matchesRegex, 'Test123', '^Test')).to.be.true;
            done;
        });

        it('expect to return false if string does not matches regex', function () {
            expect(valueComparison(operators.matchesRegex, 'Test123', '^TestAAA')).to.be.false;
            done;
        });
    });

    describe('doesNotMatchRegex', function (done) {
        it('expect to return false if string matches regex', function () {
            expect(valueComparison(operators.doesNotMatchRegex, 'Test123', '^Test')).to.be.false;
            done;
        });

        it('expect to return true if string does not matches regex', function () {
            expect(valueComparison(operators.doesNotMatchRegex, 'Test123', '^TestAAA')).to.be.true;
            done;
        });
    });

    describe('lessThan', function (done) {
        it('expect to return true if number is less than number', function () {
            expect(valueComparison(operators.lessThan, 9, 10)).to.be.true;
            done;
        });

        it('expect to return false if number is greater than number', function () {
            expect(valueComparison(operators.lessThan, 10, 9)).to.be.false;
            done;
        });

        it('expect to return false if number is equal to number', function () {
            expect(valueComparison(operators.lessThan, 10, 10)).to.be.false;
            done;
        });

        it('expect to return true if string is less than number', function () {
            expect(valueComparison(operators.lessThan, '9', 10)).to.be.true;
            done;
        });

        it('expect to return false if string is greater than number', function () {
            expect(valueComparison(operators.lessThan, '10', 9)).to.be.false;
            done;
        });

        it('expect to return false if string is equal to number', function () {
            expect(valueComparison(operators.lessThan, '10', 10)).to.be.false;
            done;
        });

        it('expect to return true if number is less than string', function () {
            expect(valueComparison(operators.lessThan, 9, '10')).to.be.true;
            done;
        });

        it('expect to return false if number is greater than string', function () {
            expect(valueComparison(operators.lessThan, 10, '9')).to.be.false;
            done;
        });

        it('expect to return false if number is equal to string', function () {
            expect(valueComparison(operators.lessThan, 10, '10')).to.be.false;
            done;
        });
    });

    describe('lessThanOrEqual', function (done) {
        it('expect to return true if number is less than number', function () {
            expect(valueComparison(operators.lessThanOrEqual, 9, 10)).to.be.true;
            done;
        });

        it('expect to return false if number is greater than number', function () {
            expect(valueComparison(operators.lessThanOrEqual, 10, 9)).to.be.false;
            done;
        });

        it('expect to return true if number is equal to number', function () {
            expect(valueComparison(operators.lessThanOrEqual, 10, 10)).to.be.true;
            done;
        });

        it('expect to return true if string is less than number', function () {
            expect(valueComparison(operators.lessThanOrEqual, '9', 10)).to.be.true;
            done;
        });

        it('expect to return false if string is greater than number', function () {
            expect(valueComparison(operators.lessThanOrEqual, '10', 9)).to.be.false;
            done;
        });

        it('expect to return true if string is equal to number', function () {
            expect(valueComparison(operators.lessThanOrEqual, '10', 10)).to.be.true;
            done;
        });

        it('expect to return true if number is less than string', function () {
            expect(valueComparison(operators.lessThanOrEqual, 9, '10')).to.be.true;
            done;
        });

        it('expect to return false if number is greater than string', function () {
            expect(valueComparison(operators.lessThanOrEqual, 10, '9')).to.be.false;
            done;
        });

        it('expect to return true if number is equal to string', function () {
            expect(valueComparison(operators.lessThanOrEqual, 10, '10')).to.be.true;
            done;
        });
    });

    describe('greaterThan', function (done) {
        it('expect to return false if number is less than number', function () {
            expect(valueComparison(operators.greaterThan, 9, 10)).to.be.false;
            done;
        });

        it('expect to return false if number is greater than number', function () {
            expect(valueComparison(operators.greaterThan, 10, 9)).to.be.true;
            done;
        });

        it('expect to return false if number is equal to number', function () {
            expect(valueComparison(operators.greaterThan, 10, 10)).to.be.false;
            done;
        });

        it('expect to return false if string is less than number', function () {
            expect(valueComparison(operators.greaterThan, '9', 10)).to.be.false;
            done;
        });

        it('expect to return true if string is greater than number', function () {
            expect(valueComparison(operators.greaterThan, '10', 9)).to.be.true;
            done;
        });

        it('expect to return false if string is equal to number', function () {
            expect(valueComparison(operators.greaterThan, '10', 10)).to.be.false;
            done;
        });

        it('expect to return false if number is less than string', function () {
            expect(valueComparison(operators.greaterThan, 9, '10')).to.be.false;
            done;
        });

        it('expect to return true if number is greater than string', function () {
            expect(valueComparison(operators.greaterThan, 10, '9')).to.be.true;
            done;
        });

        it('expect to return false if number is equal to string', function () {
            expect(valueComparison(operators.greaterThan, 10, '10')).to.be.false;
            done;
        });
    });

    describe('greaterThanOrEqual', function (done) {
        it('expect to return false if number is less than number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 9, 10)).to.be.false;
            done;
        });

        it('expect to return true if number is greater than number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 10, 9)).to.be.true;
            done;
        });

        it('expect to return true if number is equal to number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 10, 10)).to.be.true;
            done;
        });

        it('expect to return false if string is less than number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, '9', 10)).to.be.false;
            done;
        });

        it('expect to return true if string is greater than number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, '10', 9)).to.be.true;
            done;
        });

        it('expect to return true if string is equal to number', function () {
            expect(valueComparison(operators.greaterThanOrEqual, '10', 10)).to.be.true;
            done;
        });

        it('expect to return false if number is less than string', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 9, '10')).to.be.false;
            done;
        });

        it('expect to return true if number is greater than string', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 10, '9')).to.be.true;
            done;
        });

        it('expect to return true if number is equal to string', function () {
            expect(valueComparison(operators.greaterThanOrEqual, 10, '10')).to.be.true;
            done;
        });
    });

    describe('isTrue', function (done) {
        it('expect to return true if variable equals true', function () {
            expect(valueComparison(operators.isTrue, trueVar)).to.be.true;
            done;
        });

        it('expect to return false if variable equals false', function () {
            expect(valueComparison(operators.isTrue, falsevar)).to.be.false;
            done;
        });

        it('expect to return false if variable is string', function () {
            expect(valueComparison(operators.isTrue, 'falsevar')).to.be.false;
            done;
        });

        it('expect to return false if variable is number', function () {
            expect(valueComparison(operators.isTrue, 1234)).to.be.false;
            done;
        });
    });

    describe('isTruthy', function (done) {
        it('expect to return true if variable equals true', function () {
            expect(valueComparison(operators.isTruthy, trueVar)).to.be.true;
            done;
        });

        it('expect to return false if variable equals false', function () {
            expect(valueComparison(operators.isTruthy, falsevar)).to.be.false;
            done;
        });

        it('expect to return true if variable is string', function () {
            expect(valueComparison(operators.isTruthy, 'falsevar')).to.be.true;
            done;
        });

        it('expect to return true if variable is number', function () {
            expect(valueComparison(operators.isTruthy, 1234)).to.be.true;
            done;
        });

        it('expect to return false if variable is null', function () {
            expect(valueComparison(operators.isTruthy, nullVar)).to.be.false;
            done;
        });

        it('expect to return false if variable is undefined', function () {
            expect(valueComparison(operators.isTruthy, undefinedVar)).to.be.false;
            done;
        });
    });

    describe('isFalse', function (done) {
        it('expect to return false if variable equals true', function () {
            expect(valueComparison(operators.isFalse, trueVar)).to.be.false;
            done;
        });

        it('expect to return true if variable equals false', function () {
            expect(valueComparison(operators.isFalse, falsevar)).to.be.true;
            done;
        });

        it('expect to return false if variable is string', function () {
            expect(valueComparison(operators.isFalse, 'falsevar')).to.be.false;
            done;
        });

        it('expect to return false if variable is number', function () {
            expect(valueComparison(operators.isFalse, 1234)).to.be.false;
            done;
        });
    });

    describe('isFalsy', function (done) {
        it('expect to return false if variable equals true', function () {
            expect(valueComparison(operators.isFalsy, trueVar)).to.be.false;
            done;
        });

        it('expect to return true if variable equals false', function () {
            expect(valueComparison(operators.isFalsy, falsevar)).to.be.true;
            done;
        });

        it('expect to return false if variable is string', function () {
            expect(valueComparison(operators.isFalsy, 'falsevar')).to.be.false;
            done;
        });

        it('expect to return false if variable is number', function () {
            expect(valueComparison(operators.isFalsy, 1234)).to.be.false;
            done;
        });

        it('expect to return true if variable is null', function () {
            expect(valueComparison(operators.isFalsy, nullVar)).to.be.true;
            done;
        });

        it('expect to return true if variable is undefined', function () {
            expect(valueComparison(operators.isFalsy, undefinedVar)).to.be.true;
            done;
        });
    });
});