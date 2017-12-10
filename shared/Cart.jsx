/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { createCartMutation } from './mutations';
import { cartQuery } from './queries';

/**
  Here's what would happen in a production app. On the server, the 'cart' query
  is executed to check whether a cart exists. This would be done using session.
  That query would return null if the cart does not exist. Then, in
  componentDidMount() (client only), !cart === true, so the 'createCart'
  mutation would execute, creating a cart and adding it to the current sesion.
  Then, the 'cart' query would be refetched, returning the created cart. The
  'cart' query resolver would contain a check for whether the cart trying to be
  fetched already exists, and it would throw an error if so. We would check
  for props.data.error in the render() method.

  That, however, seems to be the problem: Even when I explicitly throw an error
  in the resolver, props.data.error always === undefined. I'm not sure whether
  this is becaues the cart query was first executed on the server, or if there
  is some weirdness with doing a mutation + refetch in componentDidMount().

  This simple example doesn't contain session or anything like that. But it
  should demonstrate what I'm talking about.

  See /server/resolvers.js for more comments.
*/

class Cart extends Component {
  componentDidMount() {
    const { mutate, data: { cart } } = this.props;

    if (!cart) {
      mutate({
        refetchQueries: [{ query: cartQuery }],
      });
    }
  }

  render() {
    const { cart, error } = this.props.data;
    console.log(error); // always undefined, even though error in resolver is explicitly thrown

    if (cart) {
      return <p>{cart.id}</p>;
    }

    if (error) {
      return <p>There was an error!</p>;
    }

    return null;
  }
}

export default compose(
  graphql(cartQuery, { options: { errorPolicy: 'all' } }), // policy doesn't seem to make a difference
  graphql(createCartMutation),
)(Cart);
