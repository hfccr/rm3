import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { MessagingContext } from "../Contexts/MessagingContext";
import { Frame } from "./../Dashboards/Frame";

export function XmtpDialog() {
  const { xmtpDialogOpen, closeXmtpDialog, xmtpSubject } = useContext(MessagingContext);
  const subjectExtension = xmtpSubject ? `/dm/${xmtpSubject}` : "";
  // TODO: Add address mapping
  const url = "https://xmtp.vercel.app";
  return (
    <>
      <Dialog open={xmtpDialogOpen} onClose={closeXmtpDialog} maxWidth="xl" keepMounted={true}>
        <DialogTitle>Message {xmtpSubject}</DialogTitle>
        <DialogContent sx={{ minWidth: 600 }}>{/* <Frame url={url} index={1} small /> */}</DialogContent>
        <DialogActions>
          <Button onClick={closeXmtpDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
