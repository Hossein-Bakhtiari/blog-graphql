import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App.jsx";
import "./styles/styles.css";
import "./styles/index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme.js";

const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwhriuaj008w07wcoihktvhn/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </ApolloProvider>
);
