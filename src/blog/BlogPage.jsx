import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../shared/Loader";
import { GET_POST_INFO } from "../graphql/queries";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  if (error) return <h4>Error...</h4>;
  console.log(data);
  return <div>BlogPage</div>;
}

export default BlogPage;
