var assert = require("assert");
var Park = require("./Parking.js");
var Car = require("./car.js");

describe('test parking', function() {
    it ('stop car if park is not full and park has this car', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var stopcar = park.stopcar(car);
        var parkHasThisCar = park.checkcar(car);

        assert(true, parkHasThisCar);
    });

    it ('can not stop car if park is full', function() {
        var park = new Park(0);
        var car = new Car('car2');

        var stopcar = park.stopcar(car);
        var parkHasThisCar = park.checkcar(car);

        assert(false, parkHasThisCar);
    });
/*
    it ('get car if park has this car', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var stopcar = park.stopcar(car);
        var parkHasThisCar = park.checkcar(car);

        assert(true, parkHasThisCar);
    });

    it ('can not get car if park do not has this car', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var stopcar = park.stopcar(car);
        var parkHasThisCar = park.checkcar(car);

        assert(true, parkHasThisCar);
    });

*/
/*
    it ('stop to park1 if park1 is not full', function() {
        var park1 = new Park(3);
        var park2 = new Park(5);
        var car = new Car();

        var stopcar = park1.stopcar(car);
        //var park1IsFull = park.checkparkfull(park1);

        assert(true, stopcar);
    });

    it ('stop to park2 if park1 is full', function(){

    });

    it ('can not stop car if park1 and park2 all full', function(){

    });

    it ('park1 and park2 are not all full; stop car on park1', function(){

    });

    it ('can get car from parks', function() {

    });
    */

    it ('stop car to more free parks', function(){

    });
});
