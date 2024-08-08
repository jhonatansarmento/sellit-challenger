import db from '@/lib/db';
import { errorHandler } from '@/middleware/errorHandler';
import { validateProductData } from '@/middleware/validation';
import { productsTable } from '@/schema/product';
import { generateUlid } from '@/utils/ulid';
import { NextResponse } from 'next/server';

export const POST = errorHandler(async (req: Request) => {
  console.log('Handling POST request to create a product');

  const data = await req.json();
  console.log('Received data:', data);

  const validationError = validateProductData(data);
  if (validationError) return validationError;

  try {
    const {
      category_id,
      name,
      description,
      producer_name,
      producer_email,
      cover,
      thumbnail,
      price,
      updated_at,
      created_at,
    } = data;

    const id = generateUlid();
    console.log('Generated ULID:', id);

    const updatedAtDate = new Date(updated_at);
    const createdAtDate = new Date(created_at);

    const result = await db
      .insert(productsTable)
      .values({
        id,
        category_id,
        name,
        description,
        producer_name,
        producer_email,
        cover,
        thumbnail,
        price,
        updated_at: updatedAtDate,
        created_at: createdAtDate,
      })
      .execute();

    console.log('Product created:', result);

    return NextResponse.json(
      { message: 'Product created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during product creation:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
});
