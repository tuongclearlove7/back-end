var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
var port = 8000;
// Construct a schema, using GraphQL schema language

const loggingMiddleware = (req, res, next) => {
    console.log('ip:', req.ip);
    next();
  }
  

var db = {

    '1': {
        id: '1',
        name: 'tuong',
        address : '31, Nguyen Khuyen',
        school : "Duy Tan University",
        birthday : "16/1/2002",
    },
    '2': {
        id: '2',
        name: 'thao',
        address : null,
        school : "Duy Tan University",
        birthday : "9/9/2003",
    },
};

// The root provides a resolver function for each API endpoint
var root = {

    user: ({id}) => {

       return db[id];
       
    },

    text : () =>{
        return `Running a GraphQL API server at http://localhost:${port}/graphql`;
    },

    quoteOfTheDay: () => {
      return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => {
      return Math.random();
    },
    rollThreeDice: () => {
      return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },

    rollDice: ({numDice, numSides}) => {
        var output = [];
        for (var i = 0; i < numDice; i++) {
          output.push(1 + Math.floor(Math.random() * (numSides || 100)));
        }
        return output;
    },

    ip: function (args, request) {
        return request.ip;
    }
};
  

app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
    schema: schema.schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(port, () => 
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
);
//run npm run dev


























