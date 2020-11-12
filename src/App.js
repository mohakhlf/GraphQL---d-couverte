import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import LaunchesListView from "./service/components/launchesComponent";

const httpLink = new HttpLink({ uri: 'https://api.spacex.land/graphql/' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
        <div>
          <LaunchesListView />
        </div>
      </ApolloProvider>
  );
}

export default App;
