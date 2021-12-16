var expect = require('chai').expect;
var textMatch = require('../src/helpers/textMatch');

var regex = new RegExp('^Test.*', 'i');
var badRegex = new RegExp('Test$', 'i');
var text = 'Testing needs to be completed';

describe('textMatch', function(done) {
    it('expect to throw error if pattern if null', function () {
        expect(() => textMatch(text)).to.throw('Illegal Argument: Pattern is not present');
        done;
    });

    it('expect to return false if string is null', function () {
        expect(textMatch(null ,'test')).to.be.false;
        done;
    });

    it('expect to return true if string equals pattern', function () {
        expect(textMatch(text ,text)).to.be.true;
        done;
    });

    it('expect to return false if string does not equal pattern', function () {
        expect(textMatch(text ,'Test')).to.be.false;
        done;
    });

    it('expect to return true if string equals regex pattern', function () {
        expect(textMatch(text ,regex)).to.be.true;
        done;
    });

    it('expect to return false if string does not equal regex pattern', function () {
        expect(textMatch(text ,badRegex)).to.be.false;
        done;
    });
});