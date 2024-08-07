import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = neon(databaseUrl);

export async function helloWorld() {
  const start = new Date();
  const [dbResponse] = await sql`SELECT NOW();`;
  const dbNow = dbResponse && dbResponse.now ? dbResponse.now : '';
  const end = new Date();
  const latency = Math.abs(end.getTime() - start.getTime());
  return { dbNow: dbNow, latency: latency };
}
