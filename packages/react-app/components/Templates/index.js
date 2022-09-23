import React from "react";
import { AddNew } from "./AddNew";
import { Container } from "@mui/material";
import { TemplatesNav } from "./TemplatesNav";

export function Templates() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <AddNew />
      <TemplatesNav />
    </Container>
  );
}
