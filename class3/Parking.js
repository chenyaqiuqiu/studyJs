var Park = function(maxcars) {
    this.maxcars = maxcars;
    this.carnumber = 0;
}

Park.prototype.checkcar = function(car) {
    for (var i = 0; i < this.cars.length; ++i) {
        console.log(this.car[i]);
        if (this.cars[i] === car)
            return true;
        else
            return false;
    }
}

Park.prototype.stopcar = function(car) {
    if (this.carnumber = this.maxcars) {
        return 1;
    } else {
        this.car[this.carnumber] = car;
        this.carnumber += 1;
        return 0;
    }
}

module.exports = Park;
