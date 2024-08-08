import * as schema from '@/schema/product';
import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

neonConfig.fetchConnectionCache = true;
const sql = neon(databaseUrl);
const db = drizzle(sql, { schema });

export default db;
export { sql };
