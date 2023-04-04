var { buildSchema } = require('graphql');

var schema = buildSchema(`

  type User {
    id: String
    name: String
    address : String
    school : String
    birthday : String
  }

  type Query {

    text : String
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
    rollDice(numDice: Int!, numSides: Int): [Int]
    ip: String
    user(id: String): User
  }
`);

  module.exports = { schema };














