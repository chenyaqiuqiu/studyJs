function Animal() {
    //this.species = "animal";
}

Animal.prototype.species = "dododo";
/*
function Cat (name ,color) {
    Animal.apply(this, arguments);

    this.name = name;
    this.color = color;
}
*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

//Cat.prototype = new Animal();
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

var cat1 = new Cat('miaomiao', 'black');

console.log(cat1.name);
console.log(cat1.color);
console.log(cat1.species);
