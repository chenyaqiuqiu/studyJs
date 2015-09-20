'use strict';

var assert = require("assert");
var dis = require("./lib.js");
var distance = new dis();

describe('test distance lib', function() {
    it ('3 miles should be equal 3 miles', function(){
        var lengthA = distance.get_miles(3);
        var lengthB = distance.get_miles(3);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('3 miles should not be equal 2 miles', function(){
        var lengthA = distance.get_miles(3);
        var lengthB = distance.get_miles(2);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('3 miles should not be equal 1 miles', function(){
        var lengthA = distance.get_miles(3);
        var lengthB = distance.get_miles(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('1 feed should be equal 1 feed', function(){
        var lengthA = distance.get_feeds(1);
        var lengthB = distance.get_feeds(1);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('1 feed should not be equal 2 feeds', function(){
        var lengthA = distance.get_feeds(1);
        var lengthB = distance.get_feeds(2);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('5280 feeds should be equal 1 miles', function(){
        var lengthA = distance.get_feeds(5280);
        var lengthB = distance.get_miles(1);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('5281 feeds should not be equal 1 miles', function(){
        var lengthA = distance.get_feeds(5281);
        var lengthB = distance.get_miles(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('1 inch should be equal 1 inch', function(){
        var lengthA = distance.get_inches(1);
        var lengthB = distance.get_inches(1);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('1 inch should not be equal 2 inches', function(){
        var lengthA = distance.get_inches(1);
        var lengthB = distance.get_inches(2);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('12 inches should be equal 1 feed', function(){
        var lengthA = distance.get_inches(12);
        var lengthB = distance.get_feeds(1);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('13 inches should not be equal 1 feed', function(){
        var lengthA = distance.get_inches(13);
        var lengthB = distance.get_feeds(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

    it ('63360 inches should be equal 1 miles', function(){
        var lengthA = distance.get_inches(63360);
        var lengthB = distance.get_miles(1);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

    it ('63361 inches should not be equal 1 miles', function(){
        var lengthA = distance.get_inches(63361);
        var lengthB = distance.get_miles(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

     it ('63361 inches should not be equal 1 miles', function(){
        var lengthA = distance.get_inches(63361);
        var lengthB = distance.get_miles(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

     it ('13 inches and 11 inches is equal 2 feeds', function(){
        var lengthA = distance.add(distance.get_inches(13), distance.get_inches(11));
        var lengthB = distance.get_feeds(2);
        assert.equal(true, distance.is_equal(lengthA, lengthB));
    });

     it ('13 inches and 11 inches is equal 1 feeds', function(){
        var lengthA = distance.add(distance.get_inches(13), distance.get_inches(11));
        var lengthB = distance.get_feeds(1);
        assert.equal(false, distance.is_equal(lengthA, lengthB));
    });

     it ('5282 feeds should be equal 1 miles 2 feeds', function(){
        var lengthA = distance.get_feeds(5282);
        var pretty_print = distance.show(lengthA);
        assert.equal('1 miles 2 feeds', pretty_print);
    });

     it ('5280 feeds should be equal 1 miles 2 feeds', function(){
        var lengthA = distance.get_feeds(5280);
        var pretty_print = distance.show(lengthA);
        assert.equal('1 miles', pretty_print);
    });

     it ('1 feeds should be print as 12 inches', function(){
        var lengthA = distance.get_feeds(1);
        var pretty_inches = distance.toinch(lengthA);
        assert.equal('12 inches', pretty_inches);
    });
});


