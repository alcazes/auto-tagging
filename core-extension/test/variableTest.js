var expect = require('chai').expect;
var variable = require('../src/helpers/variable');

var regex = '^Home.*';
var badRegex = '^Test.*';

describe('variable', function (done) {
    before(function () {
        // runs once before the first test in this block
        window = {
            digitalData: {
                page: {
                    name: 'HomePage'
                }
            }
        }
    });

    after(function () {
        // runs once after the last test in this block
        delete window.digitalData;
    });

    it('expect to return true when looking for digitalData.page.name and value HomePage', function () {
        expect(variable('digitalData.page.name', 'HomePage')).to.be.true;
        done;
    });

    it('expect to return false when looking for digitalData.page.name and value Support', function () {
        expect(variable('digitalData.page.name', 'Support')).to.be.false;
        done;
    });

    it('expect to return false when looking for digitalData.site.name and value NatWest', function () {
        expect(variable('digitalData.site.name', 'NatWest')).to.be.false;
        done;
    });

    it('expect to throw error if pattern if null', function () {
        expect(() => variable('digitalData.site.name', null)).to.throw('Illegal Argument: Pattern is not present');
        done;
    });

    it('expect to return false if variable is null', function () {
        expect(variable(null, 'Test')).to.be.false;
        done;
    });

    it('expect to return true if variable value equals regex pattern', function () {
        expect(variable('digitalData.page.name', regex, true)).to.be.true;
        done;
    });

    it('expect to return false if string does not equal regex pattern', function () {
        expect(variable('digitalData.page.name', badRegex, true)).to.be.false;
        done;
    });
});