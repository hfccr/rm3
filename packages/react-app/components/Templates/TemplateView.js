import React, { useRef, useState } from "react";
import { NotificationItem, chainNameType } from "@epnsproject/sdk-uiweb";
import { Stack, Typography } from "@mui/material";

const icon = "https://bafybeifnlh4iyyxcvmvwgs42knf3zpolncdrketgdumjt52rqr55uayple.ipfs.w3s.link/dark_tower128.png";

export const TemplateView = ({ template, index }) => {
  const { templateName, templateSubject, templateMessage, templateMedia, templateUrl } = template;
  return (
    <Stack>
      <Typography variant="h4">{templateName}</Typography>
      <NotificationItem
        key={index}
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
  );
};
