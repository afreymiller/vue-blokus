
class MatrixTransformApi {
  rotateClockwise(matrix) {
    /* https://codereview.stackexchange.com/questions/186805/rotate-an-n-%C3%97-n-matrix-90-degrees-clockwise */
    const N = matrix.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = matrix.map((row, i) => 
      row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;       // hold original array reference
    matrix.push(...result);  // Spread operator
    return matrix;
  }
}

module.exports = MatrixTransformApi;