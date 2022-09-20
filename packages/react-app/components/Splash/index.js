import React from "react";
import { Typography, Stack, Container, Button } from "@mui/material";

export function Splash() {
  return (
    <Container maxWidth="xl">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h1">RM3</Typography>
        <Typography variant="h4">A Web3 CRM For Web3</Typography>
        <Typography variant="h4">Chains: SKALE, Optimism, Polygon, Cronos, Aurora</Typography>
        <Typography variant="h4">Communication: EPNS, XMTP</Typography>
        <Typography variant="h4">Data Providers: The Graph, Covalent, QuickNode</Typography>
        <Typography variant="h4">Oracles: UMA, Tellor</Typography>
        <Typography variant="h4">Social: Lens</Typography>
        <Typography variant="h4">Benefits: Worldcoin, Superfluid, ENS, Unstoppable Domains</Typography>
        <Typography variant="h4">Economics: AAVE, Yearn, APWine</Typography>
        <Button variant="contained">Launch App</Button>
      </Stack>
    </Container>
  );
}
