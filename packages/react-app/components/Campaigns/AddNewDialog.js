import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export function AddNewDialog({ open, handleClose, handleAdd }) {
  const [campaign, setCampaign] = useState({
    campaignName: "",
    campaignGraphId: "",
    campaignQuery: "",
  });
  const handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    setCampaign({
      ...campaign,
      [name]: value,
    });
  };
  const onAdd = () => {
    handleAdd(campaign);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Campaign</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a name, graph id and query</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="new-campaign-name"
            label="Campaign Name"
            name="campaignName"
            type="text"
            fullWidth
            variant="standard"
            value={campaign.campaignName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="new-campaign-graph-id"
            name="campaignGraphId"
            label="Campaign Graph ID"
            type="text"
            fullWidth
            variant="standard"
            value={campaign.campaignGraphId}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="new-campaign-query"
            name="campaignQuery"
            label="Campaign Query"
            type="text"
            fullWidth
            variant="standard"
            value={campaign.campaignQuery}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
