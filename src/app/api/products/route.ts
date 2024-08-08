import db from '@/lib/db';
import { productsTable } from '@/schema/product';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  try {
    const results = await db.select().from(productsTable).execute();
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Error fetching all products:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
