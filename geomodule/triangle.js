class Triangle {
  // Method to calculate perimeter of a triangle.
  static perimeter(side1, side2, side3) {
    return side1 + side2 + side3;
  }

  // Method to calculate area of a triangle
  static area(base, height) {
    return 0.5 * base * height;
  }
}

// Exporting the triangle class
module.exports = Triangle;
