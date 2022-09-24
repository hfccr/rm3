import React, { useEffect, useState, useContext } from "react";
import { AssetsContext } from "../Contexts/AssetsContext";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { getAddresses } from "../../helpers/getAddresses";
import { utils } from "ethers";
import InputLabel from "@mui/material/InputLabel";
import { UserList } from "../Grid/UserList";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { NotificationItem, chainNameType } from "@epnsproject/sdk-uiweb";
import { Web3Consumer } from "../../helpers/Web3Context";
import { sendNotification } from "../../helpers/sendNotification";

const icon = "https://bafybeifnlh4iyyxcvmvwgs42knf3zpolncdrketgdumjt52rqr55uayple.ipfs.w3s.link/dark_tower128.png";

function EpnsDialog({ open, handleClose, segment, user, web3 }) {
  if (segment === undefined) {
    segment = { segmentName: "Single User", segmentUsers: [user] };
  }
  const { templates } = useContext(AssetsContext);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const selectedTemplate = templates[selectedTemplateIndex];
  const { templateName, templateSubject, templateMessage, templateMedia, templateUrl } = selectedTemplate;
  const onSend = () => {
    sendNotification({
      web3,
      templateSubject,
      templateMessage,
      templateMedia,
      templateUrl,
      segmentUsers: segment.segmentUsers,
    });
    handleClose();
  };
  const handleTemplateSelectionChange = event => {
    const { target } = event;
    const { value } = target;
    setSelectedTemplateIndex(parseInt(value));
  };
  const templateMenuItems = templates.map((template, index) => {
    return (
      <MenuItem value={index} key={index}>
        {template.templateName}
      </MenuItem>
    );
  });
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullScreen={true}>
        <DialogTitle>Send EPNS Notifications</DialogTitle>
        <DialogContent>
          <Typography variant="h5" sx={{ margin: 3 }}>
            Select Template
          </Typography>
          <Stack direction="row" spacing={4} sx={{ margin: 4 }} justifyContent="center" alignItems="flex-start">
            <FormControl>
              <InputLabel id="template-select-label">Template</InputLabel>
              <Select
                labelId="template-select-label"
                id="template-select"
                value={selectedTemplateIndex}
                label="Template"
                onChange={handleTemplateSelectionChange}
              >
                {templateMenuItems}
              </Select>
            </FormControl>
            <NotificationItem
              key={selectedTemplateIndex}
              notificationTitle={templateSubject}
              notificationBody={templateMessage}
              icon={icon}
              cta={templateUrl}
              image={templateMedia}
              app="RM3"
              chainName="ETH_TEST_KOVAN"
              theme="light"
              isSpam={false}
            />
          </Stack>
          <Typography variant="h5" sx={{ margin: 4 }}>
            Send To {segment.segmentName}
          </Typography>
          <UserList users={segment.segmentUsers} />
        </DialogContent>
        <DialogActions>
          <Button size="large" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="large" variant="contained" onClick={onSend}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Web3Consumer(EpnsDialog);
