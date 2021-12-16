var titleCase = require('../src/helpers/toTitleCase');
var expect = require('chai').expect;

describe('titleCase', function(done) {
    it('expect "this is a test" to be transformed to "This Is A Test"', function () {
        expect(titleCase('this is a test')).to.equal('This Is A Test');
        done;
    });
});