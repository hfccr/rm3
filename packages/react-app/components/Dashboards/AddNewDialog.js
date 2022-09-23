import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export function AddNewDialog({ open, handleClose, handleAdd }) {
  const [dashboard, setDashboard] = useState({
    dashboardName: "",
    dashboardUrl: "",
  });
  const handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    setDashboard({
      ...dashboard,
      [name]: value,
    });
  };
  const onAdd = () => {
    handleAdd(dashboard);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Dashboard</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a URL to embed a new dashboard</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="new-dashboard-name"
            label="Dashboard Name"
            name="dashboardName"
            type="text"
            fullWidth
            variant="standard"
            value={dashboard.dashboardName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="new-dashboard-url"
            name="dashboardUrl"
            label="Dashboard URL"
            type="text"
            fullWidth
            variant="standard"
            value={dashboard.dashboardUrl}
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
