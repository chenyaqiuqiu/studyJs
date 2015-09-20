var clone = function(obj) {
    var _f = function(){};

    //console.log(obj);
    _f.prototype = obj;
    return new _f;
}
/*
var Persion = function(){
}

Persion.prototype.name = "4444";
Persion.prototype.getName = function(){
    return "ttttt";
}
*/

var Persion = {
    name: '6666',
    getName: function(){
        return this.name;
    }
}

var node = function(){}

node.prototype = Persion;

var mmm = new node();

console.log(mmm.name);

var Programmer = clone(Persion);
//var Programmer = new Persion;

//console.log(Programmer.getName());
//console.log(Programmer.name);
