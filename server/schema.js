import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
  type Cart {
    id: ID!
  }

  type Query {
    cart: Cart
  }

  type Mutation {
    createCart: Cart
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
