import React from "react";
import { Typography, Stack, Container, Button } from "@mui/material";
import Link from "next/link";

export function Splash({ web3Modal }) {
  let showLaunch = false;
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      showLaunch = true;
    }
  }
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
        {showLaunch && <Link href="/dapp">Launch App</Link>}
      </Stack>
    </Container>
  );
}
