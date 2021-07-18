'use strict';
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectancleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);              // первой строкой, все свойства родителя
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectancleWithText(25, 12, 'Hi', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());