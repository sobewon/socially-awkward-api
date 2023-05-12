const {User} = require('../models');

const userData = [
  {
    username: "User1",
    email: "user1@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "User2",
    email: "user2@example.com",
    thoughts: [],
    friends: []
  },
  {
    username: "User3",
    email: "user3@example.com",
    thoughts: [],
    friends: []
  }
];

const seedUsers = () => User.insertMany(userData);

module.exports = seedUsers;
