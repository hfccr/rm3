import React from "react";
import { Button, Box, Stack, TextField } from "@mui/material";
import { sendNotification } from "./../../helpers/sendNotification";

export default function SetupForm({ web3 }) {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Stack>
          <TextField id="nftport-private-key" label="NFTPort Private Key" variant="outlined" />
        </Stack>
        <Stack>
          <TextField id="covalent-private-key" label="Covalent Private Key" variant="outlined" />
        </Stack>
      </Box>
      <Button
        onClick={() => {
          sendNotification(web3);
        }}
      >
        Send Notification
      </Button>
    </>
  );
}
