import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { officers, competitions, users, points} from '../lib/sql-data';

const client = await db.connect();

async function seedUsers() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      administrator BOOLEAN NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, username, password, administrator)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.username}, ${hashedPassword}, ${user.administrator})
      `;
    }),
  );

  return insertedUsers;
}

async function seedOfficers() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS officers (
      id INT NOT NULL,
      img VARCHAR(255) NOT NULL,
      name TEXT NOT NULL,
      position VARCHAR(255) NOT NULL,
      descrip TEXT NOT NULL
    );
  `;

  const insertedOfficers = await Promise.all(
    officers.map(
      (officer) => client.sql`
        INSERT INTO officers (id, img, name, position, descrip)
        VALUES (${officer.id}, ${officer.img}, ${officer.name}, ${officer.position}, ${officer.descrip})
      `,
    ),
  );

  return insertedOfficers;
}

async function seedCompeitions() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS competitions (
      img VARCHAR(255) NOT NULL,
      name TEXT NOT NULL,
      descrip TEXT NOT NULL,
      members TEXT NOT NULL
    );
  `;

  const insertedCompetitions = await Promise.all(
    competitions.map(
      (compeition) => client.sql`
        INSERT INTO competitions (img, name, descrip, members)
        VALUES (${compeition.img}, ${compeition.name}, ${compeition.descrip}, ${compeition.members})
      `,
    ),
  );

  return insertedCompetitions;
}

async function seedPoints() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS points (
      id INT NOT NULL,  
      name VARCHAR(255) NOT NULL,  
      points INT NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const insertedPoints = await Promise.all(
    points.map(
      (point) => client.sql`
        INSERT INTO points (id, name, points, email)
        VALUES (${point.id}, ${point.name}, ${point.points}, ${point.email})
      `,
    ),
  );

  return insertedPoints;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedOfficers();
    await seedCompeitions();
    await seedPoints();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
 