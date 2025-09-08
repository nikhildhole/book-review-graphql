const { gql } = require('apollo-server-express');

module.exports = gql`
  type Publisher {
    id: ID!
    name: String!
    country: String
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    publisher: Publisher
  }

  type Query {
    books(title: String, author: String, publisherName: String): [Book]
    publishers(id: ID): [Publisher]
  }
`;
