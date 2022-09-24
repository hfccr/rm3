import React, { useState, useContext } from "react";
import { Stack, Button } from "@mui/material";
import { AssetsContext } from "./../Contexts/AssetsContext";
import { SegmentCreationDialog } from "./../Grid/SegmentCreationDialog";

export function AddNew() {
  const [open, setOpen] = React.useState(false);
  const { segments, addSegment, clearSegments } = useContext(AssetsContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = segment => {
    addSegment(segment);
    handleClose();
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Segment
        </Button>
        <Button variant="contained" onClick={clearSegments}>
          Clear All Segments
        </Button>
      </Stack>
      <SegmentCreationDialog open={open} handleClose={handleClose} handleAdd={handleAdd} selectedRows={[]} />
    </>
  );
}
