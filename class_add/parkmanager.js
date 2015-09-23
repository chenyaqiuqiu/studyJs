var Park = require("./parklot.js");

var Parkmanager = function(parklot1, parklot2) {
    this.parklot1 = parklot1;
    this.parklot2 = parklot2;
}

Parkmanager.prototype.parkCar = function(car) {

    if(this.parklot1.parklotRemain() + this.parklot2.parklotRemain() === 0) {
        return "no stops";
    }

    if (this.parklot1.parklotRemain() > 1) {
        this.parklot1.parkCar(car);
        return "parklot1";
    }
    else {
        this.parklot2.parkCar(car);
        return "parklot2";
    }
}

Parkmanager.prototype.getCarLocation = function(car) {
    if (this.parklot1.findedCar(car) === 'true') {
        return "parklot1";
    } else if (this.parklot2.findedCar(car) === 'true') {
        return "parklot2";
    }
}

Parkmanager.prototype.unparkCar = function(car) {

    if (this.getCarLocation(car) === 'parklot1') {
        this.parklot1.unparkCar(car);
        return true;
    } else if (this.getCarLocation(car) === 'parklot2') {
        this.parklot2.unparkCar(car);
        return true;
    }

    return false;
}

module.exports = Parkmanager;

