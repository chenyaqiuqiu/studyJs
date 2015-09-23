var Park = function(max) {
    this.cars = [];
    this.maxstops = max;
    this.carnumbers = 0;
}

Park.prototype.parkCar = function(car) {
    if (this.carnumbers === this.maxstops) {
        return false;
    } else {
        this.cars[car.carid] = car;
        this.carnumbers += 1;
        return true;
    }
}

Park.prototype.findedCar = function(car) {
    return this.cars.hasOwnProperty(car.carid);
}

Park.prototype.parklotRemain = function () {
    var remainstops = this.maxstops - this.carnumbers;

    return remainstops;
}

Park.prototype.unparkCar = function(car) {
    if(this.findedCar(car)) {
        delete this.cars[car.carid];
        this.carnumbers -= 1;
        return true;
    } else {
        return false;
    }
}

module.exports = Park;
