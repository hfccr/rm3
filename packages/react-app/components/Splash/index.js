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
    <Container maxWidth="xl" sx={{ padding: 4 }}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <Typography variant="h1">RM3</Typography>
        <Typography variant="h4">
          RM3 is an awesome serverless Web3 CRM for building and developing DAO, DeFi and other communities based
          completely on web3 technologies. It also introduces a novel protocol to help dApp developers to make
          serverless apps.
        </Typography>
        <Typography variant="h4">BYOS Protocol: Ceramic DIDs & Compose DB</Typography>
        <Typography variant="h4">Communication: EPNS, XMTP</Typography>
        <Typography variant="h4">Data Providers: The Graph, Covalent, ENS, NFTPort</Typography>
        <Typography variant="h4">Chains: Optimism, Polygon, Aurora</Typography>
        {showLaunch && <Link href="/dapp">Launch App</Link>}
      </Stack>
    </Container>
  );
}
