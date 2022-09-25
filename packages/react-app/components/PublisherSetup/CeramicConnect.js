import React from "react";
import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { Button, Typography } from "@mui/material";

export function CeramicConnect({ connection, connect, disconnect, web3 }) {
  const connected = connection.status === "connected";
  const address = web3.address;
  return (
    <>
      <Typography variant="h6">Connect DID</Typography>
      {connected && (
        <Button
          onClick={() => {
            disconnect();
          }}
          variant="contained"
        >
          Disconnect {connection.selfID.id}
        </Button>
      )}
      {!connected && (
        <Button
          variant="contained"
          onClick={async () => {
            await connect(new EthereumAuthProvider(window.ethereum, address));
          }}
        >
          Connect
        </Button>
      )}
    </>
  );
}
