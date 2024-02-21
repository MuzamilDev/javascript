function calculateRectangleArea(length, width) {
    function area() {
      return length * width;
    }
    return area;
  }
  
  const rectangle1 = calculateRectangleArea(5, 3);
  const rectangle2 = calculateRectangleArea(7, 4);
  
  console.log(rectangle1()); // Output: 15
  console.log(rectangle2()); // Output: 28
  