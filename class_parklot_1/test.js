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
        assert.equal(true, newPartedCar);
    });

    it ('can find parked car in park groud if parked it', function() {
        var park = new Park(3);
        var car1 = new Car('car1');
        var newPartedCar = park.parkCar(car1);
        var findedCar1 = park.findedCar(car1);
        assert.equal(true, findedCar1);

        var car2 = new Car('car2');
        var findedCar2 = park.findedCar(car2);
        assert.equal(false, findedCar2);
    });

    it ('can not park car if park is full', function() {
        var park = new Park(2);
        var car1 = new Car('car1');
        var car2 = new Car('car2');
        var car3 = new Car('car3');

        var newPartedCar1 = park.parkCar(car1);
        var newPartedCar2 = park.parkCar(car2);
        var newPartedCar3 = park.parkCar(car3);

        assert.equal(true, newPartedCar2);
        assert.equal(false, newPartedCar3);
    });

    it ('can not get car if park does not have this car', function() {
        var park = new Park(3);
        var car = new Car('car1');

        var findedCar = park.findedCar(car);
        assert.equal(false, findedCar);
    });
});


describe('test property parklot manager', function() {
    it ('park to parklot1 if park1 is not full', function() {
        var parklot1 =new Park(3);
        var parklot2 = new Park(2);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car = new Car('car1');
        parkmanager.parkCar(car);

        var findedCar = parklot1.findedCar(car);
        assert.equal(true, findedCar);
    });

    it ('can not park car if all parklot are full', function() {
        var parklot1 =new Park(0);
        var parklot2 = new Park(0);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car = new Car('car1');
        parkmanager.parkCar(car);

        var findedCar = parklot1.findedCar(car);
        assert.equal(false, findedCar);

        var findedCar = parklot2.findedCar(car);
        assert.equal(false, findedCar);
    });

    it ('can park car to parklot1 if parklot1 is not full', function() {
        var parklot1 =new Park(1);
        var parklot2 = new Park(1);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car1 = new Car('car1');
        parkmanager.parkCar(car1);

        var car2 = new Car('car2');
        parkmanager.parkCar(car2);

        parkmanager.unparkCar(car1);

        var car3 = new Car('car3');
        parkmanager.parkCar(car3);

        var findedCar = parklot1.findedCar(car3);
        assert.equal(true, findedCar);
    });
});


describe('test balance parklot manager', function() {
     it ('park car to the parklot which remains more stops', function() {
        var parklot1 =new Park(3);
        var parklot2 = new Park(2);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car = new Car('car1');
        parkmanager.parkCar(car);

        var findedCar = parklot1.findedCar(car);
        assert.equal(true, findedCar);
    });

    it ('can not park car if all parklot are full', function() {
        var parklot1 =new Park(0);
        var parklot2 = new Park(0);
        var parkmanager = new Parkmanager(parklot1, parklot2);

        var car = new Car('car1');
        parkmanager.parkCar(car);

        var findedCar = parklot1.findedCar(car);
        assert.equal(false, findedCar);

        var findedCar = parklot2.findedCar(car);
        assert.equal(false, findedCar);
    });
});
