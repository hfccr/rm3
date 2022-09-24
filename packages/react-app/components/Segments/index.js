import React from "react";
import { AddNew } from "./AddNew";
import { Container } from "@mui/material";
import { SegmentsNav } from "./SegmentsNav";

export function Segments() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <AddNew />
      <SegmentsNav />
    </Container>
  );
}
