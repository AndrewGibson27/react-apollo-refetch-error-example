In reference to `apollo-client` [ticket](https://github.com/apollographql/apollo-client/issues/2703) #2703.

Related tickets:
+ `react-apollo` [#1389](https://github.com/apollographql/react-apollo/issues/1389)
+ `react-apollo` [#1320](https://github.com/apollographql/react-apollo/issues/1320)

## The problem
Refetching a query in `componentDidMount` whose resolver throws an error
does not result in that error appearing in `props.data.error`. That value
seems to always be undefined.

## Run the app
+ `yarn`
+ `yarn start`
+ Go to `http://localhost:3000`
+ Open the browser console

## Files of note, including inline comments
+ `shared/Cart.jsx`
+ `server/resolvers.js`

## Versions
+ `apollo-cache-inmemory@^1.1.3`
+ `apollo-client@^2.1.0`
+ `apollo-link-http^1.3.0`
+ `graphql@^0.11.7`
+ `graphql-server-express@1.1.7`
+ `graphql-tag@^2.6.0`
+ `graphql-tools@^2.12.0`
+ `react-apollo@^2.0.1`
