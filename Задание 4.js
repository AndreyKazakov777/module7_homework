// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных 
// приборов (передайте аргумент). 
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Electric(type, brand, power) {
    this.type = type,
    this.brand = brand,
    this.power = power,
    this.swithcOnOff = false
  }
  
  Electric.prototype.switchOn = function() {
    console.log(`The ${this.type} ${this.brand} is on.`)
    this.swithcOnOff = true
  };
  
  Electric.prototype.switchOff = function() {
    console.log(`The ${this.type} ${this.brand} is off.`)
    this.switchOff = false
  };
  
  Electric.prototype.sumPower = function () {
    if (this.swithcOnOff) return this.power;
    else return 0;
  }
  
  const lamp = new Electric ('Lamp', 'Telefunkin', 60);
  const laptop = new Electric ('Laptop', 'Apple', 120);
  const tv = new Electric ('TV', 'Sony', 150);
  
  lamp.switchOn();
  laptop.switchOff();
  tv.switchOn();
  
  console.log (`Switch on power is ${lamp.sumPower() + laptop.sumPower() + tv.sumPower()} watt.`);
