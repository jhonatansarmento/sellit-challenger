import db from '@/lib/db';
import { productsTable } from '@/schema/product';
import { ilike, or } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    const results = await db
      .select()
      .from(productsTable)
      .where(
        or(
          ilike(productsTable.name, `%${query}%`),
          ilike(productsTable.producer_name, `%${query}%`)
        )
      )
      .execute();

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Error searching for products:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
