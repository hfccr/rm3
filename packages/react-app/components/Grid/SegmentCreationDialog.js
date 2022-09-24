import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { getAddresses } from "../../helpers/getAddresses";
import { utils } from "ethers";
import { UserList } from "./UserList";

export function SegmentCreationDialog({ open, handleClose, handleAdd, selectedRows }) {
  const [segment, setSegment] = useState({
    segmentName: "",
    segmentUsers: [],
  });
  const handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    setSegment({
      ...segment,
      [name]: value,
    });
  };
  const onAdd = () => {
    handleAdd(segment);
    handleClose();
  };
  useEffect(() => {
    const addresses = getAddresses(selectedRows);
    setSegment({
      ...segment,
      segmentUsers: addresses,
    });
  }, [open]);
  const handleForceAddUser = event => {
    const { target, key } = event;
    if (key === "Enter") {
      const { value } = target;
      const segmentUsers = segment.segmentUsers;
      if (utils.isAddress(value) && segmentUsers.indexOf(value) < 0) {
        setSegment({
          ...segment,
          segmentUsers: [...segmentUsers, value],
        });
      }
    }
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullScreen={true}>
        <DialogTitle>Create New Segment</DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={4} sx={{ width: 800 }} justifyContent="flex-start" alignItems="center">
              <TextField
                autoFocus
                margin="dense"
                id="new-segment-name"
                label="Segment Name"
                name="segmentName"
                type="text"
                fullWidth
                variant="standard"
                value={segment.segmentName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="new-segment-add-user"
                label="Add Manually"
                name="segmentForceAdd"
                type="text"
                fullWidth
                variant="standard"
                onKeyPress={handleForceAddUser}
              />
            </Stack>
            <UserList users={segment.segmentUsers} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
