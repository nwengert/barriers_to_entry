const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose');

//I'm building this following a tutorial at https://www.youtube.com/watch?v=rpJO0T08Bnc
//this was taken from https://github.com/prisma/graphql-yoga

//this is the Getting Started stuff from https://mongoosejs.com/docs/index.html
mongoose.connect('mongodb://localhost/test5');

const Todo = mongoose.model('Todo', {
    text: String,
    complete: Boolean
});

const typeDefs = `
  type Query {
    hello(name: String): String!
    todos: [Todo]
  }
  type Todo {
      id: ID!
      text: String!
      complete: Boolean!
  }
  type Mutation {
      createTodo(text: String!): Todo
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: () => Todo.find()
  },
  Mutation: {
      createTodo: async (_, { text }) => {
          const todo = new Todo({ text, complete:false });
          await todo.save();
          return todo;
      }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function() {
    server.start(() => console.log('Server is happily running on localhost:4000'))
  });
