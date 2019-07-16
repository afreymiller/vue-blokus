
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
  rotateCounterclockwise(matrix) {
    var n=matrix.length;
    for (var i=0; i<n/2; i++) {
        for (var j=i; j<n-i-1; j++) {
            var tmp=matrix[i][j];
            matrix[i][j]=matrix[j][n-i-1];
            matrix[j][n-i-1]=matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1]=matrix[n-j-1][i];
            matrix[n-j-1][i]=tmp;
        }
    }
    return matrix;
  }
}

module.exports = MatrixTransformApi;