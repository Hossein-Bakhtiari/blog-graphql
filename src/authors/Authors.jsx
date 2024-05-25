import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO);
  if (loading) return <h4>Loading...</h4>;

  if (error) return <h4>Error...</h4>;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>

          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle " />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
