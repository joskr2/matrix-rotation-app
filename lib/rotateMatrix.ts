export function rotateMatrixCounterClockwise(matrix: number[][]): number[][] {
  const dimension = matrix.length;
  const rotatedMatrix: number[][] = Array.from({ length: dimension }, () => Array(dimension).fill(0));

  for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
    for (let colIndex = 0; colIndex < dimension; colIndex++) {
      rotatedMatrix[dimension - colIndex - 1][rowIndex] = matrix[rowIndex][colIndex];
    }
  }

  return rotatedMatrix;
}
