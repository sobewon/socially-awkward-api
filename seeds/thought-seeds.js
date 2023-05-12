const {Thought} = require('../models');

const thoughtData = [
  {
    thoughtText: "This is my first thought!",
    username: "User1"
  },
  {
    thoughtText: "I love coding!",
    username: "User2"
  },
  {
    thoughtText: "Coffee is the elixir of life.",
    username: "User1"
  },
  {
    thoughtText: "The world needs more kindness.",
    username: "User3"
  }
];

const seedThoughts = () => Thought.insertMany(thoughtData);

module.exports = seedThoughts;
