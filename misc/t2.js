var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc :1;
    }
};

function test_this() {
    var value = 10;
    this.value = 100;
}

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
}

test_this.method("dadada", function() {
    console.log("I am in dadada");
});

var mmm = new test_this();

var quo = function(status_t) {
    var jjj = 9;
    return {
        get_status: function(){
            return jjj;
        }
    };
};

var fade = function(node) {
    var level = 1;
    var step = function(){
        var hex = level.toString(16);
        console.log(hex);
        if(level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };

    setTimeout(step, 100);
}

fade("abc");
