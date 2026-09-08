import React from "react";
import Helmet from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link } from "@material-ui/core";

export const PageNotFound = () => (
  <Container component="main" maxWidth="sm" style={{ paddingTop: '4rem' }}>
    <Helmet>
      <title>Page not found | Benjamin Mehrdad</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <Typography component="h1" variant="h3" gutterBottom>
      Page not found
    </Typography>
    <Typography paragraph>The page you requested does not exist.</Typography>
    <Link component={RouterLink} to="/">Back to home</Link>
  </Container>
);
