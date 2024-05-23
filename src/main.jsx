import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwhriuaj008w07wcoihktvhn/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>

    <App />
    </React.StrictMode>
  </ApolloProvider>
);
