import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const createCartMutation = gql`
  mutation {
    createCart {
      id
    }
  }
`;
