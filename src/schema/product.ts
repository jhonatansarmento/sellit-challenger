import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: varchar('id').primaryKey(),
  category_id: varchar('category_id'),
  name: varchar('name'),
  description: text('description'),
  producer_name: varchar('producer_name'),
  producer_email: varchar('producer_email'),
  cover: varchar('cover'),
  thumbnail: varchar('thumbnail'),
  price: integer('price'),
  updated_at: timestamp('updated_at'),
  created_at: timestamp('created_at'),
});
