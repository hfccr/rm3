import React from "react";
import { Alert, Container } from "@mui/material";
import { hasServices } from "./../helpers/storage";

export function CompleteToContinue({ ChildComponent, web3, requiresServices, ...props }) {
  const { web3Modal } = web3;
  const connected = web3Modal && web3Modal.cachedProvider;
  const showServiceAlert = !hasServices() && requiresServices;
  return (
    <>
      {!connected && (
        <Container maxWidth="md" sx={{ padding: 2 }}>
          <Alert severity="info">Connect wallet to continue!</Alert>
        </Container>
      )}
      {showServiceAlert && (
        <Container maxWidth="md" sx={{ padding: 2 }}>
          <Alert severity="info">Complete setup to continue!</Alert>
        </Container>
      )}
      {connected && !showServiceAlert && <ChildComponent web3={web3} {...props} />}
    </>
  );
}
