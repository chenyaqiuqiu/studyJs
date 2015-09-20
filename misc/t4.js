'use strict';

function hello(thing) {
   console.log(this + ' say hello ' + thing);
}

var persion = {
   name: "chenyma",
}

persion.hello = hello;
persion.hello('world');
