import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Notification, chainNameType, NotificationItem } from "@epnsproject/sdk-uiweb";

const icon = "https://bafybeifnlh4iyyxcvmvwgs42knf3zpolncdrketgdumjt52rqr55uayple.ipfs.w3s.link/dark_tower128.png";

export function AddNewDialog({ open, handleClose, handleAdd }) {
  const [key, setKey] = useState(0);
  const [template, setTemplate] = useState({
    templateName: "",
    templateSubject: "",
    templateMessage: "",
    templateMedia: "",
    templateUrl: "",
  });
  const handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;
    setTemplate({
      ...template,
      [name]: value,
    });
    setKey(key + 1);
  };
  const onAdd = () => {
    handleAdd(template);
  };
  return (
    <>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Add Template</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Template Details</DialogContentText>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" spacing={2} sx={{ width: 700 }}>
              <TextField
                autoFocus
                margin="dense"
                id="new-template-name"
                label="Template Name"
                name="templateName"
                type="text"
                fullWidth
                variant="standard"
                value={template.templateName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="new-template-subject"
                label="Template Subject"
                name="templateSubject"
                type="text"
                fullWidth
                variant="standard"
                value={template.templateSubject}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="new-template-message"
                label="Template Message"
                name="templateMessage"
                type="text"
                fullWidth
                variant="standard"
                value={template.templateMessage}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="new-template-media"
                label="Template Media"
                name="templateMedia"
                type="text"
                fullWidth
                variant="standard"
                value={template.templateMedia}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                id="new-template-url"
                name="templateUrl"
                label="Template URL"
                type="text"
                fullWidth
                variant="standard"
                value={template.templateUrl}
                onChange={handleInputChange}
              />
            </Stack>
            <Stack direction="column" spacing={2} justifyContent="flex-start" alignItems="flex-start">
              <Typography>Template Preview</Typography>
              <Stack sx={{ width: 500, height: 300 }}>
                <NotificationItem
                  key={key}
                  notificationTitle={template.templateSubject}
                  notificationBody={template.templateMessage}
                  cta={template.templateUrl}
                  image={template.templateMedia}
                  app="RM3"
                  chainName="ETH_TEST_KOVAN"
                  theme="light"
                  isSpam={false}
                  icon={icon}
                />
              </Stack>
            </Stack>
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
