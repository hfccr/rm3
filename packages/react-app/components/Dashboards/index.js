import React from "react";
import { AddNew } from "./AddNew";
import { Container } from "@mui/material";
import { DashboardNav } from "./DashboardNav";

export function Dashboards() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <AddNew />
      <DashboardNav />
    </Container>
  );
}
