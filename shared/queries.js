import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const cartQuery = gql`
  query {
    cart {
      id
    }
  }
`;
