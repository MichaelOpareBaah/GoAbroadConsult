// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from './lib/mysql'; 

export default async function handler(req, res) {
  const db = await connectToDatabase();

  const [rows] = await db.query('SELECT * FROM travellers');

  res.status(200).json({ name: rows})
}
