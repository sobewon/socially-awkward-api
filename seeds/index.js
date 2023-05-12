const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  
  await seedThoughts();

  process.exit(0);
};

seedAll();
