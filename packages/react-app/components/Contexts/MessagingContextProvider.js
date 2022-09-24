import React, { useEffect, useState } from "react";
import { MessagingContext } from "./MessagingContext";
import { MessagingFab } from "./../Messaging/MessagingFab";
import { XmtpDialog } from "../Messaging/XmtpDialog";

export function MessagingContextProvider({ children }) {
  const [xmtpDialogOpen, setXmtpDialogOpen] = useState(false);
  const [xmtpSubject, setXmtpSubject] = useState("");
  const openXmtpDialog = subject => {
    if (subject) {
      setXmtpSubject(subject);
    }
    setXmtpDialogOpen(true);
  };
  const closeXmtpDialog = () => {
    setXmtpDialogOpen(false);
  };
  return (
    <MessagingContext.Provider value={{ xmtpDialogOpen, openXmtpDialog, closeXmtpDialog, xmtpSubject }}>
      <XmtpDialog />
      <MessagingFab />
      {children}
    </MessagingContext.Provider>
  );
}
