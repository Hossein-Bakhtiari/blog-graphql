import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../graphql/queries";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log(data)
  return <div>Comments</div>;
}

export default Comments;
