const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');
const db = require('../config/connection');

const seedAll = async () => {
  await db;

  await seedUsers();
  
  await seedThoughts();

  console.log('Seeding complete!');

  process.exit(0);
};

seedAll();

