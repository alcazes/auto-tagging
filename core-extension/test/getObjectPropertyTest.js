var getObjectProperty = require('../src/helpers/getObjectProperty');
var expect = require('chai').expect;

describe('getObjectProperty', function(done) {
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


    it('expect to find and return value from window.digitalData.page.name', function () {
        expect(getObjectProperty(window, 'digitalData.page.name')).to.equal('HomePage');
        done;
    });

    it('expect to to not find digitalData.site.name and return undefined', function () {
        expect(getObjectProperty(window, 'digitalData.site.name')).to.equal(undefined);
        done;
    });
});