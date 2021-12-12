import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import "bootstrap/dist/css/bootstrap.min.css";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
  }
  if (networkError) {
    console.log("networkError", networkError);
  }
});

const httpLink = createHttpLink({
  uri: "https://tu-portafolio-apigateway.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem("token") || "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(store).use(router).use(apolloProvider).mount("#app");
