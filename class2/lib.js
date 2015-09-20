var base = function(value, unit) {
    this.value = value;
    this.unit = unit;
}

var distance = function(){
}

distance.inch = 1;
distance.feed = distance.inch * 12;
distance.mile = distance.feed * 5280;


distance.prototype.get_inches = function(value) {
    var inches = new base(value, distance.inch);
    return inches;
}
distance.prototype.get_feeds = function(value) {
    var feeds = new base(value, distance.feed);
    return feeds;
}
distance.prototype.get_miles = function(value) {
    var miles = new base(value, distance.mile);
    return miles;
}

distance.prototype.is_equal = function (inst_a, inst_b) {
    var basevalue_a = inst_a.value * inst_a.unit;
    var basevalue_b = inst_b.value * inst_b.unit;

    if (basevalue_a === basevalue_b)
        return true;
    else
        return false;
}

distance.prototype.add = function(inst_a, inst_b) {
    var new_instance = new base();
    new_instance.value = inst_a.value + inst_b.value;
    new_instance.unit = inst_a.unit;
    return new_instance;
}

distance.prototype.show = function(inst_a) {
    var basevalue = inst_a.value * inst_a.unit;
    var str = '';

    if (basevalue === 0) {
        str += '0 miles';
    } else {
        var milesvalue = Math.floor(basevalue / distance.mile);
        if (milesvalue >= 1) {
            str += milesvalue + ' miles';
        }
        var feedvalue = Math.floor((basevalue - milesvalue * distance.mile) / distance.feed);
        if (feedvalue >= 1) {
            str += ' ' + feedvalue + ' feeds';
        }
        var inchvalue = Math.floor((basevalue - milesvalue * distance.mile - feedvalue * distance.feed) / distance.inch);
        if (inchvalue >= 1) {
            str += ' ' + inchvalue + ' inches';
        }
    }
    return str;
}

distance.prototype.toinch = function(inst_a) {
    var basevalue = inst_a.value * inst_a.unit;
    var str = basevalue + ' inches';

    return str;
}

module.exports = distance;
