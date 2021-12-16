var setObjectProperty = require('../src/helpers/setObjectProperty');
var expect = require('chai').expect;

describe('setObjectProperty', function(done) {
    before(function () {
        // runs once before the first test in this block
        window = {};
        setObjectProperty('digitalData.test.name', 'test123');
    });

    after(function () {
        // runs once after the last test in this block
        delete window.digitalData;
    });

    it('expect digitalData object to exist', function () {
        expect(window.hasOwnProperty('digitalData')).is.true;
        done;
    });

    it('expect digitalData.test object to exist', function () {
        expect(window.digitalData.hasOwnProperty('test')).is.true;
        done;
    });

    it('expect digitalData.test.name property to exist', function () {
        expect(window.digitalData.test.hasOwnProperty('name')).is.true;
        done;
    });

    it('expect digitalData.test.name to be equal to test123', function () {
        expect(window.digitalData.test.name).to.equal('test123');
        done;
    });

    it('expect digitalData.test.name to be equal to testNew (changed from initial value of test123)', function () {
        setObjectProperty('digitalData.test.name', 'testNew');
        expect(window.digitalData.test.name).to.equal('testNew');
        done;
    });

    it('expect digitalData.test.site to be equal to new and digitalData.test.name to be equal to testNew', function () {
        setObjectProperty('digitalData.test.site', 'new');
        expect(window.digitalData.test.site).to.equal('new');
        expect(window.digitalData.test.name).to.equal('testNew');
        done;
    });

    it('expect digitalData.test to be overwritten to new', function () {
        setObjectProperty('digitalData.test', 'new');
        expect(window.digitalData.test).to.equal('new');
        done;
    });
});