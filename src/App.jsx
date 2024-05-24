import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data);
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
