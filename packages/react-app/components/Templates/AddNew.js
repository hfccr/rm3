import React, { useState, useContext } from "react";
import { Stack, Button } from "@mui/material";
import { AddNewDialog } from "./AddNewDialog";
import { AssetsContext } from "./../Contexts/AssetsContext";

export function AddNew() {
  const [open, setOpen] = React.useState(false);
  const { templates, addTemplate, clearTemplates } = useContext(AssetsContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = template => {
    addTemplate(template);
    handleClose();
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Template
        </Button>
        <Button variant="contained" onClick={clearTemplates}>
          Clear All Templates
        </Button>
      </Stack>
      <AddNewDialog open={open} handleClose={handleClose} handleAdd={handleAdd} />
    </>
  );
}
