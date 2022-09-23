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

export function UserCard({ address, ensProfile }) {
  let name,
    records,
    texts,
    recordMap = {};
  if (ensProfile) {
    name = ensProfile.name;
    records = ensProfile.records;
    texts = records.texts;
    if (Array.isArray(texts)) {
      texts.forEach(text => {
        recordMap[text.key] = text.value;
      });
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
  return (
    <Stack direction="row">
      <Card sx={{ width: 345 }}>
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ margin: 1 }}>
          {avatar}
          <Typography variant="h5">{name ? name : shortAddress}</Typography>
          <Typography variant="h6">{recordMap.url}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
        <Stack direction="column" spacing={3} justifyContent="center" alignItems="center" sx={{ margin: 1 }}>
          <Button variant="contained" startIcon={<TwitterIcon />} disabled={!!!twitter}>
            {twitter ? twitter : "Not Set"}
          </Button>
          <Button variant="contained" startIcon={<EmailIcon />} disabled={!!!email}>
            {email ? email : "Not Set"}
          </Button>
          <Button variant="contained" startIcon={<VideogameAssetIcon />} disabled={!!!discord}>
            {discord ? discord : "Not Set"}
          </Button>
          <Button variant="contained" startIcon={<RedditIcon />} disabled={!!!reddit}>
            {reddit ? reddit : "Not Set"}
          </Button>
          <Button variant="contained" startIcon={<TelegramIcon />} disabled={!!!telegram}>
            {telegram ? telegram : "Not Set"}
          </Button>
          <Button variant="contained" startIcon={<ChatIcon />}>
            XMTP
          </Button>
          <Button variant="contained" startIcon={<NotificationsIcon />}>
            EPNS
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
