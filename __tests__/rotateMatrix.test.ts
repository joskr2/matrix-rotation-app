// __tests__/rotateMatrix.test.ts
import { rotateMatrixCounterClockwise } from '@/lib/rotateMatrix';

describe('rotateMatrix', () => {
  it('should rotate a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [2, 4],
      [1, 3],
    ];
    expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
  });

  it('should rotate a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
  });

  it('should handle a 4x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [
      [4, 8, 12, 16],
      [3, 7, 11, 15],
      [2, 6, 10, 14],
      [1, 5, 9, 13],
    ];
    expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
  });

  it('should rotate a 5x5 matrix', () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expected = [
      [5, 10, 15, 20, 25],
      [4, 9, 14, 19, 24],
      [3, 8, 13, 18, 23],
      [2, 7, 12, 17, 22],
      [1, 6, 11, 16, 21],
    ];
    expect(rotateMatrixCounterClockwise(matrix)).toEqual(expected);
  });
});
