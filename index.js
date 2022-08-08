//Task 1

const positiveNUmbers = [5, -4, 7, 55, -3, 44].filter((number) => number > 0).reduce((acc,ell) => acc + ell);
console.log(positiveNUmbers)


//Task 2

const arrayNames = ["misho", "misho", "oto", "giga", "oto", "ana", "nini", "vaxo"];
const numbersElements = arrayNames.reduce((obj,current) => {
    if(obj[current]) {
        obj[current] += 1;
    }else{
        obj[current] = 1;
    }
    return obj;
},{});
console.log(numbersElements)


// Task 3

class Car {
    constructor(brand, model,){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.motion = this.speed > 0 ? "The car is moving" : "The car is not moving" ;
    };
    check_motion () {
        if(this.speed > 0 ) console.log(this.motion);
        if(this.speed == 0 ) console.log(this.motion);
    };
    accelerate () {
        this.speed += 25
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    };
    brake () {
        this.speed -= 15;
        if(this.speed < 0 ) this.speed = 0;
        console.log(`${this.brand} is going at ${this.speed} km/h`);
        
    };
    emergency_brake () {
        if(this.speed >= 0)  console.log(`Emergency brake!!! Speed is ${this.speed = 0} km/h`);
    };
    status () {
        this.speed = 120
        console.log(`${this.brand} ${this.model} is going at ${this.speed} km/h`);
    };
};

const carOne = new Car("Porsche", "Cayman");
carOne.check_motion();
carOne.accelerate();
carOne.accelerate();
carOne.accelerate();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.brake();
carOne.emergency_brake();
carOne.status();

// Task 4

function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if ((a, b)) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  addAsync(4, 8)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));