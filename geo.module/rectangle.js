class Rectangle {
  // Method to calculate perimeter of a rectangle.
  static perimeter(length, width) {
    return 2 * (length + width);
  }

  // Method to calculate area of a rectangle
  static area(length, breadth) {
    return length * breadth;
  }
}

// exporting the Rectangle class
module.exports = Rectangle;
