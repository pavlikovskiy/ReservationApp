/**
 * @flow
 */

import React, { Component } from "react";
import AppNavigator from "./AppNavigator";
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BACKEND_URI } from './Configs';

const client = new ApolloClient({
  link: new HttpLink({
    uri: BACKEND_URI
  }),
  cache: new InMemoryCache()
});


export default class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}
