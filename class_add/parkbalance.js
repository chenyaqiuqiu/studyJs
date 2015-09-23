var Park = require("./parklot.js");

var Parkbalance = function(parklot1, parklot2) {
    this.parklot1 = parklot1;
    this.parklot2 = parklot2;
}

Parkbalance.prototype.parkCar = function(car) {

    if(this.parklot1.parklotRemain() + this.parklot2.parklotRemain() === 0) {
        return "no stops";
    }


    if (this.parklot1.parklotRemain() >= this.parklot2.parklotRemain()) {
        this.parklot1.parkCar(car);
        return "parklot1";
    }
    else {
        this.parklot2.parkCar(car);
        return "parklot2";
    }
}

Parkbalance.prototype.getCarLocation = function(car) {
    if (this.parklot1.findedCar(car) === 'true') {
        return "parklot1";
    } else if (this.parklot2.findedCar(car) === 'true') {
        return "parklot2";
    }

    return "no this car";
}


Parkbalance.prototype.unparkCar = function(car) {

    if (this.getCarLocation(car) === 'parklot1') {
        this.parklot1.unparkCar(car);
        return true;
    } else if (this.getCarLocation(car) === 'parklot2') {
        this.parklot2.unparkCar(car);
        return true;
    }

    return false;
}

module.exports = Parkbalance;

