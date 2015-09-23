var assert = require("assert");
var Park = require("./parklot.js");
var Car = require("./car.js");
var Parkmanager = require("./parkmanager.js");
var Parkbalance = require("./parkbalance.js");

describe('test parklot', function() {
    it ('can park car if park is not full', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var newPartedCar = park.parkCar(car);
        assert('true', newPartedCar);
    });

    it ('can find parked car in park groud if parked it', function() {
        var park = new Park(3);
        var car1 = new Car('car1');

        var newPartedCar = park.parkCar(car1);
        var findedCar1 = park.findedCar(car1);
        assert('true', findedCar1);


        var car2 = new Car('car2');
        var findedCar2 = park.findedCar(car2);
        assert('false', findedCar2);

    });

    it ('can not park car if park is full', function() {
        var park = new Park(2);
        var car1 = new Car('car1');
        var car2 = new Car('car2');
        var car3 = new Car('car3');

        var newPartedCar1 = park.parkCar(car1);
        var newPartedCar2 = park.parkCar(car2);
        var newPartedCar3 = park.parkCar(car3);

        assert('true', newPartedCar2);
        assert('false', newPartedCar3);
    });

    it ('can not get car if park does not have this car', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var findedCar = park.findedCar(car);
        assert('false', findedCar);
    });
});


describe('test parklots with parklot1 has high property', function() {
    it ('park to parklot1 if park1 is not full', function() {
        var parklot1 = new Park(2);
        var parklot2 = new Park(3);
        var parkmanager = new Parkmanager(parklot1, parklot2);
        var car = new Car('car1');

        var parkedcar = parkmanager.parkCar(car);
        //var parkedcar = parkmanager.findcarin();
        assert('parklot1', parkedcar);
    });

    it ('can not park car if parklot1 & parklot2 are all full', function() {
        var parklot1 = new Park(1);
        var parklot2 = new Park(1);

        var parkmanager = new Parkmanager(parklot1, parklot2);
        var car1 = new Car('car1');
        var parkedcar1 = parkmanager.parkCar(car1);

        var car2 = new Car('car2');
        var parkedcar2 = parkmanager.parkCar(car2);

        var car3 = new Car('car3');
        var parkedcar3 = parkmanager.parkCar(car3);


        //var parkedcar = parkmanager.findcarin();
        assert('parklot1', parkedcar1);
        assert('parklot2', parkedcar2);
        assert('no stops', parkedcar3);
    });

    it ('park car to parklot1 if parklot1 & parklot2 are all not full', function() {

        var parklot1 = new Park(1);
        var parklot2 = new Park(1);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car1 = new Car('car1');
        var parkedcar1 = parkmanager.parkCar(car1);
        assert('parklot1', parkedcar1);

        var car2 = new Car('car2');
        var parkedcar2 = parkmanager.parkCar(car2);
        assert('parklot2', parkedcar2);

        var unpark = parkmanager.unparkCar(car1);
        assert('true', unpark);

        var car3 = new Car('car3');
        var parkedcar3 = parkmanager.parkCar(car3);
        assert('parklot1', parkedcar3);
    });


    it ('park to the most remaining parklot', function() {
        var parklot1 = new Park(2);
        var parklot2 = new Park(4);
        var parkbalance = new Parkbalance(parklot1, parklot2);
        var car = new Car('car1');

        var parkedcar = parkbalance.parkCar(car);
        //var parkedcar = parkmanager.findcarin();
        assert('parklot2', parkedcar);
    });

    it ('can not park car if parklot1 & parklot2 are all full', function() {
        var parklot1 = new Park(1);
        var parklot2 = new Park(1);

        var parkbalance = new Parkbalance(parklot1, parklot2);
        var car1 = new Car('car1');
        var parkedcar1 = parkbalance.parkCar(car1);

        var car2 = new Car('car2');
        var parkedcar2 = parkbalance.parkCar(car2);

        var car3 = new Car('car3');
        var parkedcar3 = parkbalance.parkCar(car3);


        //var parkedcar = parkmanager.findcarin();
        assert('parklot1', parkedcar1);
        assert('parklot2', parkedcar2);
        assert('no stops', parkedcar3);
    });

});
