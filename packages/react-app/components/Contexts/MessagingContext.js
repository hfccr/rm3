import React, { createContext } from "react";

const defaultMessagingContext = {
  xmtpDialogOpen: false,
  xmtpSubject: "",
  openXmtpDialog: () => {},
  closeXmtpDialog: () => {},
};

export const MessagingContext = createContext(defaultMessagingContext);
