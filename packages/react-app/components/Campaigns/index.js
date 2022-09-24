import React from "react";
import { AddNew } from "./AddNew";
import { Container } from "@mui/material";
import { CampaignNav } from "./CampaignNav";

export function Campaigns() {
  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      <AddNew />
      <CampaignNav />
    </Container>
  );
}
