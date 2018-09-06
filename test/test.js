'use strict';

var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('#convert', function() {
    it('Tiếng Việt Công nghệ Giáo dục', function() {
        var result = index.convert('Tiếng Việt Công nghệ Giáo dục');
        expect(result).to.equal('△ □ △ ◯ □ □');
    });
    it('Còn duyên kén cá chọn canh', function() {
        var result = index.convert('Còn duyên kén cá chọn canh\r\nHết duyên ếch đực, cua kềnh cũng vơ\r\nCòn duyên kén những trai tơ\r\nHết duyên ông lão cũng vơ làm chồng');
        expect(result).to.equal('□ △ □ □ △ △\r\n□ △ △ □ □ △ △ □\r\n□ △ □ ◯ △ □\r\n□ △ △ □ △ □ □ ◯');
    });
});