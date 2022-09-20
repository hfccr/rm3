import React, { useContext } from "react";
import { Web3Consumer } from "../helpers/Web3Context";
import { Typography, Container, Stack } from "@mui/material";
import PublisherSetupComponent from "./../components/PublisherSetup";

function PublisherSetup({ web3 }) {
  console.log(`🗄 web3 context:`, web3);

  return (
    <Container maxWidth="xl">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h1">RM3</Typography>
        <Typography variant="h4">Publisher Setup</Typography>
        <PublisherSetupComponent web3={web3} />
      </Stack>
    </Container>
  );
}

export default Web3Consumer(PublisherSetup);
