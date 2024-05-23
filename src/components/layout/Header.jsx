import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import React from "react";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="300" flex={1}>
            وبلاگ تو
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
