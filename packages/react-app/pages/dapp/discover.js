import React from "react";
import { Web3Consumer } from "../../helpers/Web3Context";
import { Typography, Container, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

function Discover() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ margin: 4 }}>
        Deployments
      </Typography>
      <Stack justifyContent="center" alignItems="center">
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png" />
            </ListItemAvatar>
            <ListItemText primary="Polygon Mumbai" secondary="0xAe4536E152ba220A18AadD07b6E408F3A0F2Ec32" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://images.typeform.com/images/EG4Bu9vzTvwF/image/default" />
            </ListItemAvatar>
            <ListItemText primary="Optimistic Goerli" secondary="0xBceD40F512B0886e1129f953813c15e37feb6Be5" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="https://avatars.githubusercontent.com/u/79027550?s=200&v=4" />
            </ListItemAvatar>
            <ListItemText primary="Aurora" secondary="0xBceD40F512B0886e1129f953813c15e37feb6Be5" />
          </ListItem>
        </List>
      </Stack>
    </Container>
  );
}

export default Web3Consumer(Discover);
