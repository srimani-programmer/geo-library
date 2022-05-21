const PI = 3.14;

class Circle {
  // Method to calculate the diameter of a circle.
  static diameter(radius) {
    return 2 * radius;
  }

  // Method to calculate area of a circle
  static area(radius) {
    return PI * radius * radius;
  }
}

// exporting the Circle class
module.exports = Circle;
