import mysql from 'mysql2/promise';

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error(
    'Please define the DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, and DB_NAME environment variables inside .env.local',
  );
}

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

//   console.log("connection",connection);

  return connection;
}