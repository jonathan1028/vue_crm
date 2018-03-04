import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { GC_AUTH_TOKEN } from './constants/settings'
import { setContext } from 'apollo-link-context'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  // uri: 'http://localhost:4000/graphql'
  uri: 'https://api.graph.cool/simple/v1/cje80a66w2io80169t9xekvw3'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(GC_AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// Install the vue plugin
Vue.use(VueApollo)

export default apolloClient
