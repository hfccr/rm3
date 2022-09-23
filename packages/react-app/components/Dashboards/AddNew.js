import React, { useState, useContext } from "react";
import { Stack, Button } from "@mui/material";
import { AddNewDialog } from "./AddNewDialog";
import { AssetsContext } from "./../Contexts/AssetsContext";

export function AddNew() {
  const [open, setOpen] = React.useState(false);
  const { dashboards, addDashboard, clearDashboards } = useContext(AssetsContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = dashboard => {
    addDashboard(dashboard);
    handleClose();
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Dashboard
        </Button>
        <Button variant="contained" onClick={clearDashboards}>
          Clear All Dashboards
        </Button>
      </Stack>
      <AddNewDialog open={open} handleClose={handleClose} handleAdd={handleAdd} />
    </>
  );
}
