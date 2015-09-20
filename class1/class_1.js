distance.prototype.inch = 1;
distance.prototype.feed = 12;
distance.prototype.mile = 5280;

var distance = (function () {
    var inch = 1;
    var feed = inch * 12;
    var mile = feed * 5280;

    return {
        get_inches: function (inches) {
            return inch * inches;
        },
        get_feeds: function(feeds) {
            return feed * feeds;
        },
        get_miles: function(miles) {
            return mile * miles;
        },
        is_equal: function(distance_a ,distance_b) {
            if(distance_a === distance_b)
                return true;
            else {
                return false;
            }
        },
        add: function(distance_a, distance_b) {
           var add_value = distance_a + distance_b;
           return add_value;
        },
        show: function(distance) { // input any data return the max
            var mile_i = distance / mile;
            var feed_i = distance - mile_i * mile;
            var inch_i = distance - mile_i * mile - feed_i * feed;

            var str;
            if (mile_i !== 0) {
                str = mile_i + "miles";
            } else if (feed_i !== 0) {
                str = feed_i + "feeds";
            } else if (inch_i !== 0) {
                str = inch_i + "inches";
            }

            console.log(str);
            return str;
        }
    }
}());

module.exports = distance;
