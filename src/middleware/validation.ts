import { NextResponse } from 'next/server';

export function validateProductData(data: any) {
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

  if (
    !category_id ||
    !name ||
    !description ||
    !producer_name ||
    !producer_email ||
    !cover ||
    !thumbnail ||
    typeof price !== 'number' ||
    !updated_at ||
    !created_at
  ) {
    console.log('Validation failed: Missing required fields');
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  return null;
}
