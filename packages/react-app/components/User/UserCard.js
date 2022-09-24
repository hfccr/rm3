import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import TwitterIcon from "@mui/icons-material/Twitter";
import Blockies from "react-blockies";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import { MessagingContext } from "../Contexts/MessagingContext";
import { useContext } from "react";
import Paper from "@mui/material/Paper";

export function UserCard({ address, ensProfile, miniMode }) {
  miniMode = true;
  const buttonSize = miniMode ? "small" : "medium";
  const { xmtpSubject, xmtpDialogOpen, openXmtpDialog, closeXmtpDialog } = useContext(MessagingContext);
  let name,
    records,
    texts,
    recordMap = {};
  if (ensProfile) {
    name = ensProfile.name;
    records = ensProfile.records;
    if (records) {
      texts = records.texts;
      if (Array.isArray(texts)) {
        texts.forEach(text => {
          recordMap[text.key] = text.value;
        });
      }
    }
  }
  let avatar = <></>;
  if (recordMap.avatar) {
    avatar = (
      <Avatar sx={{ bgcolor: red[500], width: 64, height: 64 }} aria-label="recipe" src={recordMap.avatar}></Avatar>
    );
  } else {
    avatar = <Blockies seed={address.toLowerCase()} size={16} scale={4} />;
  }
  const twitter = recordMap["com.twitter"];
  const email = recordMap["com.email"];
  const discord = recordMap["com.discord"];
  const description = recordMap["com.description"];
  const reddit = recordMap["com.reddit"];
  const telegram = recordMap["com.telegram"];
  const shortAddress = address.substr(0, 6) + "..." + address.substr(-4);
  const defaultValue = "Not Set";
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack direction="column" sx={{ width: 400 }}>
        <Stack
          direction={miniMode ? "row" : "column"}
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          sx={{ margin: 1 }}
        >
          {avatar}
          <Stack direction="column">
            <Typography variant="h5">{name ? name : shortAddress}</Typography>
            <Typography variant="h6">{recordMap.url}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: 1, maxWidth: 400 }}
          >
            <Button size={buttonSize} variant="contained" startIcon={<TwitterIcon />} disabled={!!!twitter}>
              {twitter ? twitter : defaultValue}
            </Button>
            <Button size={buttonSize} variant="contained" startIcon={<EmailIcon />} disabled={!!!email}>
              {email ? email : defaultValue}
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: 1, maxWidth: 400 }}
          >
            <Button size={buttonSize} variant="contained" startIcon={<VideogameAssetIcon />} disabled={!!!discord}>
              {discord ? discord : defaultValue}
            </Button>
            {/* <Button size={buttonSize} variant="contained" startIcon={<RedditIcon />} disabled={!!!reddit}>
              {reddit ? reddit : defaultValue}
            </Button> */}
            <Button size={buttonSize} variant="contained" startIcon={<TelegramIcon />} disabled={!!!telegram}>
              {telegram ? telegram : defaultValue}
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: 2, maxWidth: 400 }}
          >
            <Button
              size={buttonSize}
              variant="contained"
              startIcon={<ChatIcon />}
              onClick={() => {
                openXmtpDialog(address);
              }}
            >
              XMTP
            </Button>
            <Button size={buttonSize} variant="contained" startIcon={<NotificationsIcon />}>
              EPNS
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
