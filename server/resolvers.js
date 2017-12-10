/**
  See comments in /shared/Cart.jsx before reading this.

  Essentially, the cart query is executed server side, returning null.
  Then, createCart is called in componentDidMount(). After that mutation
  finishes, it refetches the cart query, which this time intentionally
  throws an error.
*/

let counter = 0;

const resolvers = {
  Query: {
    cart: () => {
      if (counter === 0) {
        counter += 1;
        return null;
      }
      throw new Error('Oh no!'); // normally we would only throw an error if necessary; just for demo purposes
    },
  },

  Mutation: {
    createCart: () => ({ id: '1234' }),
  },
};

export default resolvers;
