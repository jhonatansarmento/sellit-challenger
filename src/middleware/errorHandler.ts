import { NextResponse } from 'next/server';

export function errorHandler(fn: (...args: any[]) => Promise<Response>) {
  return async function (...args: any[]) {
    try {
      return await fn(...args);
    } catch (error) {
      console.error('Error caught in errorHandler:', error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  };
}
