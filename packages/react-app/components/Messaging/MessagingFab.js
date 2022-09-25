import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import { MessagingContext } from "../Contexts/MessagingContext";
import { useContext } from "react";

export function MessagingFab() {
  const { xmtpSubject, xmtpDialogOpen, openXmtpDialog, closeXmtpDialog } = useContext(MessagingContext);
  return (
    <></>
    // <Box
    //   sx={{
    //     "& > :not(style)": { m: 1 },
    //     position: "fixed",
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     flexWrap: "wrap-reverse",
    //     flexDirection: "row-reverse",
    //   }}
    // >
    //   {/* <Fab
    //     color="primary"
    //     aria-label="add"
    //     sx={{
    //       position: "absolute",
    //       bottom: 40,
    //       right: 40,
    //     }}
    //   >
    //     <ChatIcon
    //       onClick={() => {
    //         openXmtpDialog();
    //       }}
    //     />
    //   </Fab> */}
    // </Box>
  );
}
