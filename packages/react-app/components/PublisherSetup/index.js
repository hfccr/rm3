import React from "react";
import SetupForm from "./SetupForm";
import { Typography, Container, Stack } from "@mui/material";

export default function PublisherSetup({ web3 }) {
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: 3 }}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Typography variant="h4">RM3 BYOS(Bring Your Own Services) Protocol</Typography>
          <SetupForm web3={web3} />
        </Stack>
      </Container>
    </>
  );
}
