import { helloWorld } from '@/app/lib/db';

export default async function Home() {
  const dbHello = await helloWorld();
  console.log('🚀 ~ Home ~ dbHello:', dbHello);

  const formattedDbNow = new Date(dbHello.dbNow).toLocaleString();

  return (
    <>
      <h1>Hello</h1>
      <h1>World</h1>
      <p>Latency: {dbHello.latency} ms</p>
      <p>Database Time: {formattedDbNow}</p>
    </>
  );
}

export const runtime = 'edge';
export const preferredRegion = 'iad1';
