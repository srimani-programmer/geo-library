class Square {
  // Method to calculate perimeter of a square.
  static perimeter(side) {
    return 4 * side;
  }

  // Method to calculate area of a square
  static area(side) {
    return side * side;
  }
}

// exporting the Square class
module.exports = Square;
