import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./blog/BlogPage";
import AuthorPage from "./authors/AuthorPage";

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
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/blogs/:slug" element={<BlogPage />}/>
        <Route path="/authors/:slug" element={<AuthorPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;
