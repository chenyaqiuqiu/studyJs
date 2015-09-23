var Park = require("./parklot.js");

var Parkmanager = function(parklot) {
    this.parklot = parklot;
}

Parkmanager.prototype.parkCar = function(car) {

    var remainstops = this.parklot1.parklotRemain() + this.parklot2.parklotRemain();

    if (remainstops !== 0) {
        if (this.parklot1.parklotRemain() > 0) {
            this.parklot1.parkCar(car);
        }
        else {
            this.parklot2.parkCar(car);
        }
    }
}

Parkmanager.prototype.unparkCar = function(car) {

    if (this.parklot1.findedCar(car)) {
        this.parklot1.unparkCar(car);
    }
    if (this.parklot2.findedCar(car)) {
        this.parklot2.unparkCar(car);
    }
}

module.exports = Parkmanager;

