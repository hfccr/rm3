import React, { useState, useContext } from "react";
import { Stack, Button } from "@mui/material";
import { AddNewDialog } from "./AddNewDialog";
import { AssetsContext } from "./../Contexts/AssetsContext";

export function AddNew() {
  const [open, setOpen] = React.useState(false);
  const { campaigns, addCampaign, clearCampaigns } = useContext(AssetsContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = campaign => {
    addCampaign(campaign);
    handleClose();
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Campaign
        </Button>
        <Button variant="contained" onClick={clearCampaigns}>
          Clear All Campaigns
        </Button>
      </Stack>
      <AddNewDialog open={open} handleClose={handleClose} handleAdd={handleAdd} />
    </>
  );
}
