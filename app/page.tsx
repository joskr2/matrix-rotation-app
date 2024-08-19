'use client'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { rotateMatrixCounterClockwise } from '@/lib/rotateMatrix';
import React from 'react'
import { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  const [matrix, setMatrix] = useState<number[][] | null>(null);
  const [rotatedMatrix, setRotatedMatrix] = useState<number[][] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleRotateMatrix = () => {
    try {
      const parsedMatrix = JSON.parse(input);
      if (
        !Array.isArray(parsedMatrix) ||
        !parsedMatrix.every(
          (row) => Array.isArray(row) && row.length === parsedMatrix.length
        )
      ) {
        throw new Error('The input must be a square matrix of numbers');
      }
      setMatrix(parsedMatrix);
      setRotatedMatrix(rotateMatrixCounterClockwise(parsedMatrix));
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

  return (
    <main className='flex flex-col justify-between h-dvh w-full min-h-screen items-center m-auto p-6'>
      <h1 className="text-3xl text-pretty text-center md:text-5xl font-bold mb-4">Rotate Matrix 90° Counterclockwise</h1>
      <div className=' w-6/12 m-auto flex flex-col justify-center'>
        <Textarea
          value={input}
          onChange={handleInputChange}
          rows={6}
          placeholder="Enter the matrix in JSON format(ej. [[1,2,3],[4,5,6],[7,8,9]])"
          className="mb-4 w-full self-center"
        />
        <Button onClick={handleRotateMatrix} className="mb-6 w-full h-12 self-center">
          Rotate Matrix
        </Button>
        {rotatedMatrix && (
          <div className="w-full max-w-md flex flex-col md:flex-row gap-2 justify-between self-center">
            <div className='flex flex-col m-2'>
              <h2 className="text-2xl font-semibold mb-4">Original Matrix</h2>
              <pre className="bg-gray-100 p-4 mb-4 rounded">{JSON.stringify(matrix, null, 2)}</pre>
            </div>
            <div className='flex flex-col m-2'>
              <h2 className="text-2xl font-semibold mb-4">Rotated Matrix</h2>
              <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(rotatedMatrix, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
