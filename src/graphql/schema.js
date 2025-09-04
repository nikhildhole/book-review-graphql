const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`;
