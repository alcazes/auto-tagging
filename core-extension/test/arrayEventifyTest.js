var arrayEventify = require('../src/helpers/arrayEventify');
var expect = require('chai').expect;

describe('arrayEventify', function (done) {
    before(function () {
        function test() {
            window.arrayEventified = true;
        }
        // runs once before the first test in this block
        window = {
            testArray: []
        }
        arrayEventify(window.testArray, test);

    });

    after(function () {
        // runs once after the last test in this block
        delete window.testArray;
        delete window.arrayEventified;

    });

    it('expect callback to have been called when item pushed to array', function () {
        window.testArray.push('item1');
        expect(window.arrayEventified).to.be.true;
        done;
    });
});