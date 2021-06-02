// ES5
function ShapeOld(color, sides, name) {
  this.color = color;
  this.sides = sides;
  this.name = name;
}

// ES6
class Shape {
  constructor(color, sides, name) {
    this.color = color;
    this.sides = sides;
    this.name = name;
  }
}

const shape = new Shape("blue", "4", "Square");
console.log(shape);
