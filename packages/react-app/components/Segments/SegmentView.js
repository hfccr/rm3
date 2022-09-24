import React, { useRef, useState } from "react";
import { NotificationItem, chainNameType } from "@epnsproject/sdk-uiweb";
import { Button, Stack, Typography } from "@mui/material";
import { UserList } from "./../Grid/UserList";
import EpnsDialog from "../Messaging/EpnsDialog";

const icon = "https://bafybeifnlh4iyyxcvmvwgs42knf3zpolncdrketgdumjt52rqr55uayple.ipfs.w3s.link/dark_tower128.png";

export const SegmentView = ({ segment, index }) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const { segmentName, segmentUsers } = segment;
  return (
    <Stack spacing={4} direction="column">
      <EpnsDialog segment={segment} open={open} handleClose={closeDialog} />
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h4">{segmentName}</Typography>
        <Button variant="contained" onClick={openDialog}>
          Notify
        </Button>
        <Button variant="contained">Meet</Button>
      </Stack>
      <UserList users={segmentUsers} />
    </Stack>
  );
};
