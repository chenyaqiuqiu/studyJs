var Park = require("./parklot.js");

var Parkmanager = function(parklot1, parklot2) {
    this.parklot1 = parklot1;
    this.parklot2 = parklot2;
}

Parkmanager.prototype.parkCar = function(car) {

    var remainstops = this.parklot1.parklotRemain() + this.parklot2.parklotRemain();

    if (remainstops !== 0) {
        if (this.parklot1.parklotRemain() > this.parklot2.parklotRemain()) {
            this.parklot1.parkCar(car);
        }
        else {
            this.parklot2.parkCar(car);
        }
    }
}

Parkmanager.prototype.unparkCar = function(car) {

    if (this.parklot1.findedCar(car) === 'true') {
        this.parklot1.unparkCar(car);
    }
    if (this.parklot2.findedCar(car) === 'true') {
        this.parklot2.unparkCar(car);
    }
}

module.exports = Parkmanager;

