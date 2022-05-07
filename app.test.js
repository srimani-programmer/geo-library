const app = require("./app");

const circleArea = app.Circle.area(5);

console.log(circleArea);

const rectArea = app.Rectangle.area(10, 5);

console.log(rectArea);

const squareArea = app.Square.area(25);

console.log(squareArea);

const trianglePerimeter = app.Triangle.perimeter(10, 15, 25);

console.log(trianglePerimeter);
