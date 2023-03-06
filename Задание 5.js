// Переписать консольное приложение из предыдущего юнита на классы.

class Electric {
   constructor (type, brand, power) {
    this.type = type,
    this.brand = brand,
    this.power = power,
    this.swithcOnOff = false
  }
  
  switchOn() {
    console.log(`The ${this.type} ${this.brand} is on.`)
    this.swithcOnOff = true
  };
  
  switchOff() {
    console.log(`The ${this.type} ${this.brand} is off.`)
    this.switchOff = false
  };

  sumPower() {
    if (this.swithcOnOff) return this.power;
    else return 0;
  }
}
  
  const lamp = new Electric ('Lamp', 'Telefunkin', 60);
  const laptop = new Electric ('Laptop', 'Apple', 120);
  const tv = new Electric ('TV', 'Sony', 150);
  
  lamp.switchOn();
  laptop.switchOff();
  tv.switchOn();
  
  console.log (`Switch on power is ${lamp.sumPower() + laptop.sumPower() + tv.sumPower()} watt.`);
