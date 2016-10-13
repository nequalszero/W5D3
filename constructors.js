function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`
}

Cat.prototype.meow = function () {
  return 'Rawr!';
}

const cat1 = new Cat("Boots", "Shrek");

cat1.meow = function () {
  return 'Boop!';
}

const cat2 = new Cat("Shoes", "Fiona");
const cat3 = new Cat("Sandals", "Donkey");
const cat4 = new Cat("Socks", "Charming");
console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());
console.log(cat4.meow());
