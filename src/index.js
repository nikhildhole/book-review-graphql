require('dotenv').config();

const fs = require('fs');
const https = require('https');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

async function startServer() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  // Load mkcert-generated key/cert
  const httpsOptions = {
    key: fs.readFileSync('./localhost+2-key.pem'),
    cert: fs.readFileSync('./localhost+2.pem'),
  };

  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(
      `🚀 Server running at https://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
