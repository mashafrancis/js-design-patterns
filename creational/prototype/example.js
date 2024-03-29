const car = {
  drive() {
    console.log("Started Driving");
  },
  brake() {
    console.log("Stopping the car");
  },
  numofWheels: 4,
};

const car1 = Object.create(car);
car1.drive();
car1.brake();
console.log(car1.numofWheels);

//defining the extra property color with value red black
const car2 = Object.create(car, { color: { value: "red black" } });
car2.drive();
car2.brake();
console.log(car2.numofWheels);
